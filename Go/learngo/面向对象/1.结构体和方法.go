package main

import "fmt"

// 定义结构体
type treeNode struct {
	value       int
	left, right *treeNode
}

func main() {
	// 创建treeNode实例
	var root treeNode
	fmt.Println(root) // {0 <nil> <nil>}
	root = treeNode{value: 3}
	root.left = &treeNode{}
	root.right = &treeNode{5, nil, nil}
	// 不管是指针还是实例，都通过.的方式访问
	root.right.left = new(treeNode) // 通过内建函数创建

	// 在slice中
	nodes := []treeNode{
		{value: 3},
		{},
		{6, nil, &root},
	}
	println(nodes)

}
