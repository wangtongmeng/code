package main

import "fmt"

func main() {
	// 全部初始化
	var Numbers1 [5]int = [5]int{1, 2, 3, 4, 5}
	fmt.Println(Numbers1, Numbers1[3]) // [1 2 3 4 5] 4
	// 部分初始化
	Numbers2 := [5]int{1, 2}
	fmt.Println(Numbers2, Numbers2[4]) // [1 2 0 0 0] 0
	// 指定某个元素初始化
	Numbers3 := [5]int{2: 5, 3: 6}
	fmt.Println(Numbers3, Numbers3[3]) // [0 0 5 6 0] 6
	// 通过初始化确定数组长度
	Numbers4 := [...]int{1, 2, 3}
	fmt.Println(Numbers4, len(Numbers4)) // [1 2 3] 3

	// 通过下标单个赋值
	var Numbers5 [5]int
	Numbers5[0] = 1
	Numbers5[1] = 2
	fmt.Println(Numbers5) // [1 2 0 0 0]
	// 通过循环方式赋值
	for i := 0; i < len(Numbers5); i++ {
		Numbers5[i] = i + 1
	}
	fmt.Println(Numbers5) // [1 2 3 4 5]
}
