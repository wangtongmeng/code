// Vue Router 历史记录测试脚本
// 使用方法：打开浏览器控制台，复制粘贴执行

console.log('=== Vue Router 历史记录测试 ===');

function printHistoryStatus() {
  console.log(`当前历史记录长度: ${window.history.length}`);
  console.log(`当前路径: ${window.location.pathname}`);
  console.log('---');
}

// 测试用例
const testCases = [
  {
    name: '初始状态',
    action: () => {
      console.log('测试1: 初始状态');
      printHistoryStatus();
    }
  },
  {
    name: 'Push到page1',
    action: () => {
      console.log('测试2: Push到page1');
      window.vueApp.$router.push('/page1').then(() => {
        setTimeout(printHistoryStatus, 100);
      });
    }
  },
  {
    name: 'Push到page2',
    action: () => {
      console.log('测试3: Push到page2');
      window.vueApp.$router.push('/page2').then(() => {
        setTimeout(printHistoryStatus, 100);
      });
    }
  },
  {
    name: '返回上一层',
    action: () => {
      console.log('测试4: router.back()');
      window.vueApp.$router.back().then(() => {
        setTimeout(printHistoryStatus, 500);
      });
    }
  },
  {
    name: '替换当前页面',
    action: () => {
      console.log('测试5: 替换当前页面到page3');
      window.vueApp.$router.replace('/page3').then(() => {
        setTimeout(printHistoryStatus, 100);
      });
    }
  },
  {
    name: 'Push到About',
    action: () => {
      console.log('测试6: Push到About');
      window.vueApp.$router.push('/about').then(() => {
        setTimeout(printHistoryStatus, 100);
      });
    }
  },
  {
    name: '返回首页',
    action: () => {
      console.log('测试7: 返回首页');
      window.vueApp.$router.push('/').then(() => {
        setTimeout(printHistoryStatus, 100);
      });
    }
  }
];

// 执行所有测试
async function runAllTests() {
  for (let i = 0; i < testCases.length; i++) {
    console.log(`\n>>> 执行测试: ${testCases[i].name}`);
    await new Promise(resolve => {
      testCases[i].action();
      setTimeout(resolve, 1000);
    });
  }
  console.log('\n=== 所有测试完成 ===');
}

// 暴露到全局
window.runHistoryTests = runAllTests;
window.printHistoryStatus = printHistoryStatus;

console.log('测试脚本加载完成！');
console.log('使用方法:');
console.log('- runHistoryTests(): 运行完整测试序列');
console.log('- printHistoryStatus(): 打印当前历史记录状态');
