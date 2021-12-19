package main

import "fmt"

func main() {
	// 全部初始化
	var arr [2][3]int = [2][3]int{{1, 2, 3}, {5, 6, 7}}
	fmt.Println(arr) // [[1 2 3] [5 6 7]]
	// 部分初始化
	var arr2 [2][3]int = [2][3]int{{1, 2}, {6}}
	fmt.Println(arr2) // [[1 2 0] [6 0 0]]
	// 指定元素初始化
	var arr3 [2][3]int = [2][3]int{0: {1: 6}}
	fmt.Println(arr3) // [[0 6 0] [0 0 0]]
	// 通过初始化确定二维数组行数
	// 行的下标可以用"..."来代替，但是列的下标不能用"..."来代替。
	arr4 := [...][3]int{{1, 2, 3}, {5, 6}}
	fmt.Println(arr4) // [[1 2 3] [5 6 0]]
	// 通过循环遍历的方式输出打印二维数组中的值
	var arr5 [2][3]int = [2][3]int{{1, 2, 3}, {5, 6, 7}}
	fmt.Println(len(arr5))          // 2 行数
	fmt.Println(len(arr5[0]))       // 3 列数
	for i := 0; i < len(arr); i++ { // 遍历行
		for j := 0; j < len(arr[0]); j++ { // 遍历列
			fmt.Println((arr[i][j])) // 123567
		}
	}
	for _, v := range arr5 {
		for j, data := range v {
			fmt.Println(j)    // 012012
			fmt.Println(data) // 123567
		}
	}
	// 赋值
	arr[0][1] = 123
	fmt.Println(arr[0][1]) // 132

}
