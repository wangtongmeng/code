/* 
快速排序最常用的排序算法。它的复杂度为 O(nlog(n))，且性能通常比其他复杂度为 O(nlog(n))的排序算法要好。和归并排序一样，快速排序也使用分而治之的方法，将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开）。

(1) 首先，从数组中选择一个值作为主元（ pivot），也就是数组中间的那个值。
(2) 创建两个指针（引用），左边一个指向数组第一个值，右边一个指向数组最后一个值。移动左指针直到我们找到一个比主元大的值，接着，移动右指针直到找到一个比主元小的值，然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之前，而比主元大的值都排在主元之后。这一步叫作划分（ partition）操作。
(3) 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直至数组已完全排序。
*/
let array = [7, 3, 8, 12, 4]
function quickSort(array) {
    return quick(array, 0, array.length - 1)
}
function quick(array, left, right) {
    let index
    if (array.length < 2) { // 数组小于2个直接返回
        return array
    }
    index = partition(array, left, right) // 划分 找出中心点，比中心点小的放左边，比中心点大的放右边
    if (left < index - 1) {
        quick(array, left, index - 1) // 继续递归划分
    }
    if (index < right) {
        quick(array, index, right)
    }
    return array
}
function partition(array, left, right) { // 划分
    const pivot = array[Math.floor(right+left)/2] // 中心点
    let i = left
    let j = right
    while(i <=j){
        while(array[i] < pivot) {
            i++
        }
        while(array[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(array, i, j)
            i++
            j--
        }
    }
    return i
}
function swap(array, a, b) {
    [array[b], array[a]] = [array[a], array[b]]
}

console.log(quickSort(array)); // [ 3, 4, 7, 8, 12 ]