package main

import "fmt"

func main() {
	// 切片
	var a []int
	fmt.Printf("%T\r\n", a) // []int

	// 添加
	a = append(a, 0)
	a = append(a, 1)
	a = append(a, 2)
	fmt.Println(a) // [0 1 2]

	// 访问元素 单个 多个
	fmt.Println(a[1:3]) // [1 2]
	fmt.Println(a[1:])  // [1 2]
	fmt.Println(a[:2])  // [0 1]
	fmt.Println(a[:])   // [0 1 2]

	// 切片合并
	b := []int{0, 1}
	c := []int{2, 3, 4, 5}
	b = append(b, c[1:]...)
	fmt.Println(b) // [0 1 3 4 5]

	// 删除元素
	a1 := []int{0, 1, 2, 3, 4, 5}
	// 删除 3
	a1 = append(a1[0:3], a1[4:]...)
	fmt.Println(a1) // [0 1 2 4 5]

	a1 = a1[:3]
	fmt.Println(a1) // [0 1 2]

	// 复制 slice
	a2 := []int{0, 1, 2, 3, 4, 5}
	b2 := a2
	c2 := a2[:]
	var d2 = make([]int, len(a2))
	copy(d2, a2)
	a2[0] = 6
	fmt.Println(a2, b2, c2) // [6 1 2 3 4 5] [6 1 2 3 4 5] [6 1 2 3 4 5]
	fmt.Println(d2)         // [0 1 2 3 4 5]
}
