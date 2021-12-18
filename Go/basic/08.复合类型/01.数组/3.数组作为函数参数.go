package main

import "fmt"

func main() {
	var Numbers [5]int = [5]int{1, 2, 3, 4, 5}
	getPrint(Numbers)
	fmt.Println(Numbers) // [1 2 3 4 5] 没有变化

}
func getPrint(n [5]int) {
	// 函数内，对数组参数的修改不会影响原数组
	for i := 0; i < len(n); i++ {
		n[i] += 1
		fmt.Println(n[i]) // 23456
	}
	fmt.Println(n) // [2 3 4 5 6]
}
