package main

import "fmt"

func main() {
	// 1: 考虑一行展示
	for j := 1; j <= 9; j++ { //行
		// for i := 1; i <= j; i++ { // 三角形输出
		for i := 1; i <= 9; i++ { // 矩形输出
			// 1*1=1
			fmt.Printf("%d*%d=%d\t", j, i, j*i) // \t --tab
		}
		fmt.Print("\n")
	}

	// 2； 考虑多行展示
}
