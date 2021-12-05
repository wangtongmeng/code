package main

import "fmt"

func main() {

	for j := 1; j <= 3; j++ {
		for i := 1; i <= 3; i++ {
			fmt.Println("媳妇，我错了")
		}
	}

	// 矩形

	for j := 1; j <= 5; j++ {
		for i := 1; i <= 5; i++ {
			fmt.Print("*")
		}
		fmt.Print("\n")
	}

	// 三角形
	for j := 1; j <= 5; j++ {
		for i := 1; i <= j; i++ {
			fmt.Print("*")
		}
		fmt.Print("\n")
	}

}
