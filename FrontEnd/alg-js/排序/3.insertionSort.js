/* 
插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。接着，它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确排序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推。
*/
let array = [7, 3, 8, 12, 4]
function insertionSort(array) {
    const len = array.length
    let temp
    for (let i = 1; i < len; i++) {
        let j = i
        temp = array[i] // 取出待插入的元素存起来
        while(j > 0 && array[j - 1] > temp) { // 遍历左侧已排序的元素，找到合适的位置插入
            array[j] = array[j-1] // 元素向右移动一个位置
            j--
        }
        array[j] = temp // 把待插入的元素插入空出来的位置
    }
    return array
}
console.log(insertionSort(array));  // [ 3, 4, 7, 8, 12 ]