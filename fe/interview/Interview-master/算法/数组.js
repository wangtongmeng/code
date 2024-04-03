/* eslint-disable */
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
// 说明:
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n ）来保存 nums2 中的元素。
// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// 输出: [1,2,2,3,5,6]
function merge(arr1, m, arr2, n) {
    // 数组splice 从m开始包括m，删除n个元素，
    arr1.splice(m,n, ...arr2);
    arr1.sort((a, b) => a-b);
    return arr1;
}


// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
var twoSum = function(nums, target) {
    // 暴力解法
    let result = [];
    let len = nums.length;
    for(var i =  0; i < len; i++){
        let sec = target - nums[i];
        let secIndex = nums.indexOf(sec);
        if (secIndex !== -1 && secIndex !== i){
            result = [i, secIndex];
            return result;
            break;
        }
    }
};

var twoSum2 = function(nums, target) {
    let map = new Map();
    const len = nums.length;
    for(let i = 0; i < len; i++){
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        else {
            map.set(nums[i], i);
        }
    }
    return [];
};

// 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
// var arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];
// 解法1：
Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})
// 解法2：
arr.toString().split(',').sort((a ,b) => a -b);
// 解法3：
var flatArr = arr => {
    // reduce和concat都不改变原数组！！！
    // initialValue 作为第一次调用 callback函数时的第一个参数accumulate的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
    return arr.reduce((accumulate, cur) => {
        return accumulate.concat(Array.isArray(cur) ? flatArr(cur) : cur);
    }, [])
}

// 给定两个数组，编写一个函数来计算它们的交集
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
var intersection = function(nums1, nums2) {
    let map1 = new Set(nums1);
    let map2 = new Set(nums2);
    let res = []
    map1.forEach((item) => {
        if(map2.has(item)){
            res.push(item)
        }

    })
    return res
};

// 多个数组的交集
var intersections = function(...arrs) {}


// 判断 [1, 3] [2, 5] 这样两个数组是否有交集，数组第二项>=第一项
function hasSame(arr1, arr2) {
    // 在数轴上找到相交的逻辑即可，初中数学
}


// 删除不按顺序的
// [1 2 3 4] => [1 2 3 4]
// [1 3 2 4] => [1 4]
// 我的暴力解法
function deleteUnorder(arr) {
    const {length} = arr
    const newArr = arr.filter((ele, index) => {
        if (index === 0) {
            return arr[0] < arr[1];
        }
        else if (index === arr.length - 1) {
            return arr[length - 2] < arr[length - 1];
        }
        else {
            return arr[index -1] < arr[index] && arr[index] < arr[index + 1];
        }
    });
    return newArr;
}

// 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// => 有重复数字的全排列


// 用 JS 实现二分查找（折半查找）算法，并写出时间复杂度。 log2(n)
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
var search = function(nums, target) {
    const {length} = nums;
    if (length === 0) {
        return -1;
    }

    let lowIndex = 0;
    let highIndex = length -1;

    while (lowIndex <= highIndex) {
        let midIndex = Math.floor((highIndex + lowIndex) / 2);
        if (target === nums[midIndex]) {
            return midIndex;
        }
        else if (target > nums[midIndex]) {
            lowIndex = midIndex + 1;
        }
        else if (target < nums[midIndex]) {
            highIndex = midIndex -1;
        }
        else {
            return -1;
        }
    }
    return -1;
}

// 旋转数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
function rotateArr(arr, key) {
    const num = key % arr.length;
    const left = arr.splice(arr.length - num, num);
    return left.concat(arr);
}








