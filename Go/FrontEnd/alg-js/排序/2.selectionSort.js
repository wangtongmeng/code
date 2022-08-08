/* 
选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。
*/
let array = [7, 3, 8, 12, 4]
function selectionSort(array) {
    let len = array.length
    let indexMin
    for (let i = 0; i < len; i++) {
        indexMin = i
        for (let j = i; j < len; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin)
        }
    }
    return array
}
function swap(array, a, b) {
    [array[b], array[a]] = [array[a], array[b]]
}

console.log(selectionSort(array)); // [ 3, 4, 7, 8, 12 ]