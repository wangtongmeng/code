/* 
桶排序（也被称为箱排序）也是分布式排序算法，它将元素分为不同的桶（较小的数组），再使用一个简单的排序算法，例如插入排序（用来排序小数组的不错的算法），来对每个桶进行排序。然后，它将所有的桶合并为结果数组。

对于桶排序算法，我们需要指定需要多少桶来排序各个元素。默认情况下，我们会使用 5 个桶。桶排序在所有元素平分到各个桶中时的表现最好。如果元素非常稀疏，则使用更多的桶会更好。如果元素非常密集，则使用较少的桶会更好。

我们将算法分为两个部分：
    第一个用于创建桶并将元素分布到不同的桶中
    第二个包含对每个桶执行插入排序算法和将所有桶合并为排序后的结果数组。
*/
let array = [7, 3, 8, 12, 4]
function bucketSort(array, bucketSize = 5) {
    if (array.length < 2) {
        return array
    }
    const buckets = createBuckets(array, bucketSize)
    return sortBuckets(buckets)
}
function createBuckets(array, bucketSize) {
    let minValue = array[0]
    let maxValue = array[0]
    for (let i = 1; i < array.length;i++){ // 获取最小值和最大值
        if (array[i] < minValue) {
            minValue = array[i]
        } else if (array[i] > maxValue) {
            maxValue = array[i]
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    const buckets = []
    for (let i = 0; i< bucketCount; i++) {
        buckets[i] = []
    }
    for (let i = 0; i < array.length; i++){
        const bucketIndex = Math.floor((array[i]- minValue)/bucketSize)
        buckets[bucketIndex].push(array[i])
    }
    return buckets
    
}
function sortBuckets(buckets) {
    const sortedArray = []
    for (let i = 0;i<buckets.length;i++){
        if (buckets[i] != null) {
            insertionSort(buckets[i])
            sortedArray.push(...buckets[i])
        }
    }
    return sortedArray
}
console.log(bucketSort(array)); // [ 3, 4, 7, 8, 12 ]



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