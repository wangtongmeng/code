package main

import (
	"fmt"
)

func main() {
	// 输出出一组整型数据中最大的值。
	// 1: 明确比较的数据的个数
	fmt.Println("请输入比较的数据的个数：")
	var count int
	fmt.Scan(&count)
	// 2；输入比较的数据，并且将输入的数据存储到切片中。
	s := make([]int, count)
	AddData(s)
	// 3: 进行比较。
	max:=CompareValue(s)
	fmt.Println("max=",max)
}
func AddData(num []int) {
	for i := 0; i < len(num); i++ {
		fmt.Printf("请输入第%d个数", i+1)
		fmt.Scan(&num[i])
	}
}
func CompareValue(num []int) int{
	var max int = num[0]
	for i := 0; i < len(num); i++ {
		if num[i] > max {
			max = num[i]
		}
	}
	return max
}
