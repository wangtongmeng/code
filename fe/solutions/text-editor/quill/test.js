const formattedPrice = price => {
    let num = Number(price) / 100;
    // 判断是否为整数
    if (Math.floor(num) === num) {
        return num.toFixed(0);
    }
    // 如果>10000，则展示位xxx万
    if (num > 10000) {
        let num1 = +(num / 10000).toFixed(2);
        return Math.floor(num) === num ? num1.toFixed(0) : num1 + '万';
    }
    return num.toFixed(2);
};

// 测试不同价格区间的格式化情况
function testPriceFormatting() {
    // 测试整数金额
    console.log('整数金额测试:');
    console.log('100分 →', formattedPrice(100));    // 1
    console.log('1000分 →', formattedPrice(1000));  // 10
    
    // 测试小数金额
    console.log('150分 →', formattedPrice(150));    // 1.50
    console.log('123分 →', formattedPrice(123));    // 1.23

    // 测试千元以上金额，万元以下金额，带小数点的金额
    console.log('100006分 →', formattedPrice(100006));  // 1000.06
    
    // 测试万元金额
    console.log('1000000分 →', formattedPrice(1000000));  // 100万
    console.log('1005000分 →', formattedPrice(1005000));  // 100.50万
    
    // 边界情况测试
    console.log('1分 →', formattedPrice(1));        // 0.01元
    console.log(formattedPrice(100999999)); // 100.00万
}

testPriceFormatting();
