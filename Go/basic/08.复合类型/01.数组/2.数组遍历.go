package main

import "fmt"

func main() {
	var Numbers [5]int = [5]int{1, 2, 3, 4, 5}
	// 通过for ... len( ) 完成遍历
	for i := 0; i < len(Numbers); i++ {
		fmt.Println(Numbers[i]) // 12345
	}

	//通过for...range完成遍历
	// for i, v := range Numbers {
	for _, v := range Numbers {
		// fmt.Println("下标", i) //01234
		fmt.Println("值：", v) // 12345
	}
}
