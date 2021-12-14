package main

import "fmt"

func main() {
	// var arr [2][3]int = [2][3]int{{1, 2, 3}, {5, 6, 7}} // 全部初始化
	// 部分初始化
	// var arr [2][3]int = [2][3]int{{1,2},{6}}
	// 指定元素初始化
	// var arr [2][3]int = [2][3]int{0:{1:6}}
	// 通过初始化确定二维数组行数
	// arr := [...][3]int{{1, 2, 3}, {5, 6}} // 行的下标可以用"..."来代替，但是列的下标不能用"..."来代替。
	// fmt.Println(arr)

	// 通过循环遍历的方式输出打印二维数组中的值。
	var arr [2][3]int = [2][3]int{{1, 2, 3}, {5, 6, 7}}
	// fmt.Println(len(arr)) // 输出的是有几行。
	//fmt.Println(len(arr[0])) // 输出有几列。
	// fmt.Println(arr[0])
	/*
	for i := 0; i < len(arr); i++ {  // 遍历的行
		for j := 0; j < len(arr[0]); j++ { // 遍历的是列。
			fmt.Println(arr[i][j])
		}
	}
	*/
	for _, v := range arr {
		//fmt.Println("i", i)
		//fmt.Println("v", v)
		for j, data := range v {
			fmt.Println("j:",j)
			fmt.Println("data:",data)
		}
	}
	/*
	arr[0][1]=123
	arr[1][1]=456
	fmt.Println(arr[0][1])
	*/

}
