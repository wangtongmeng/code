package main

import (
	"container/list"
	"fmt"
)

func main() {
	/**
	集合类型4种
	1.数组 - 不同长度的数组类型不一样
	2.切片 - 动态数组，使用方便，性能高，尽量使用
	3.map
	4.list
	*/
	// list 是链表
	//var myList list.List // 初始化1
	myList := list.New() // 初始化2
	myList.PushBack(1)   // 尾部插入
	myList.PushBack(2)
	myList.PushBack(3)
	myList.PushFront(0) // 头部插入

	// 遍历 正序
	for i := myList.Front(); i != nil; i = i.Next() {
		fmt.Print(i.Value)
	}
	// 123
	fmt.Println()
	// 反向遍历
	for i := myList.Back(); i != nil; i = i.Prev() {
		fmt.Print(i.Value)
	}
	// 321
	fmt.Println()

	// 中间插入元素
	// 在 2前面插入 1.5
	i := myList.Front()
	for ; i != nil; i = i.Next() {
		if i.Value.(int) == 2 {
			break
		}
	}
	myList.InsertBefore(1.5, i)
	for i := myList.Front(); i != nil; i = i.Next() {
		fmt.Print(i.Value)
	}
	// 011.523
	fmt.Println()

	// 删除元素
	myList.Remove(i)
	for i := myList.Front(); i != nil; i = i.Next() {
		fmt.Print(i.Value)
	}
	// 011.53
	fmt.Println()

}
