let array = [7, 3, 8, 12, 4]
function bubbleSort(array) {
    let len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}
function swap(array, a, b) {
    [array[b], array[a]] = [array[a], array[b]]
}

console.log(bubbleSort(array));  // [ 3, 4, 7, 8, 12 ]

// 改进的冒泡排序
function modifiedBubbleSort(array) {
    let len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; i < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}
console.log(modifiedBubbleSort(array)); // [ 3, 4, 7, 8, 12 ]

