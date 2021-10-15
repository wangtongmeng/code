/* 
归并排序是第一个可以实际使用的排序算法。其复杂度为 O(nlog(n))。
归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
*/

let array = [7, 3, 8, 12, 4]
function mergeSort(array) {
    const len = array.length
    if (len < 2) {
        return array
    }
    const middle = Math.floor(len / 2) // 取中间位置
    const left = mergeSort(array.slice(0, middle)) // 递归拆分数组直到只有一个
    const right = mergeSort(array.slice(middle, len))
    array = merge(left, right) // 合并拆分的数组并排序
    return array
}
function merge(left,right) {
    let i = 0
    let j = 0
    const result = []
    while (i < left.length && j < right.length) { // 遍历两个数组
        let item = left[i] < right[j] ? left[i++] : right[j++] // 从小到大依次放入新数组，直至一个数组放完
        result.push(item)
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j)) // 将较长数组剩余元素放入新组数
}
console.log(mergeSort(array)); // [ 3, 4, 7, 8, 12 ]