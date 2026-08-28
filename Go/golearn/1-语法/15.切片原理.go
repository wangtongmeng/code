package main

import (
	"fmt"
	"unsafe"
)

func printSlice(data []int) {
	data[0] = 4
	data = append(data, 3)
}

type slice struct {
	array unsafe.Pointer // 用来存储实际数据的数组指针，指向一块连续的内存
	len   int            // 切片中元素的数量
	cap   int            // array数组的长度
}

func main() {
	// go的slice在函数参数传递时是值传递还是引用传递：值传递，效果又呈现引用的效果（不全是）
	a := []int{0, 1, 2}
	printSlice(a)
	fmt.Println(a) // [4 1 2]

	// 为什么append需要重新接收返回值，因为一旦发生扩容，会重新开辟空间，unsafe.Pointer指针会变，需要重新接收新地址
	data := []int{0, 1}
	b := data[:]
	c := data[:]
	c[0] = 2
	fmt.Println(b, c) // [2 1] [2 1]

	data1 := []int{0, 1}
	b1 := data1[:]
	c1 := data1[:]
	fmt.Println(len(b1), cap(b1)) // 2 2
	fmt.Println(len(c1), cap(c1)) // 2 2
	// 触发扩容
	c1 = append(c1, 2, 3, 4)
	fmt.Println(len(c1), cap(c1)) // 5 6
	c1[0] = 2
	fmt.Println(data1, b1, c1) // [0 1] [0 1] [2 1 2 3 4]

}
