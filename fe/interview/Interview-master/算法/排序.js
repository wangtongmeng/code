// 1.冒泡排序
// 原理：每一轮找出最大的放在最后，下轮就少排一个
function bubbleSort(a) {
    let len = a.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i -1; j++) {
            if (a[j] > a[j+1]) {
                let t = a[j+1];
                a[j+1] = a[j];
                a[j] = t;
            }
        }
    }
    return arr;
}

/*
2.归并排序，原理：
<1>.把长度为n的输入序列分成两个长度为n/2的子序列；
<2>.对这两个子序列分别采用归并排序；
<3>.将两个排序好的子序列合并成一个最终的排序序列。
*/
function mergeSort(arr) {
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    const middleIndex = Math.floor(len / 2);
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

/*
3.快排
快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：
<1>.从数列中挑出一个元素，称为 "基准"（pivot）；
<2>.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
<3>.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
*/
const quickSort1 = arr => {
	if (arr.length <= 1) {
		return arr;
	}
	//取基准点
	const midIndex = Math.floor(arr.length / 2);
	//取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
	const valArr = arr.splice(midIndex, 1);
	const midIndexVal = valArr[0];
	const left = []; //存放比基准点小的数组
	const right = []; //存放比基准点大的数组
	//遍历数组，进行判断分配
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < midIndexVal) {
			left.push(arr[i]); //比基准点小的放在左边数组
		} else {
			right.push(arr[i]); //比基准点大的放在右边数组
		}
	}
	//递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
	return quickSort1(left).concat(midIndexVal, quickSort1(right));
};
const array2 = [5, 4, 3, 2, 1];
console.log('quickSort1 ', quickSort1(array2));
// quickSort1: [1, 2, 3, 4, 5]
