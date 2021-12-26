package main

import "fmt"

func main() {
	// 计算出一组整型数据之和。
	// 1: 明确求的数据的个数。
	var count int
	fmt.Println("请输入要求和的数据的个数：")
	fmt.Scan(&count)
	// 2:输入要求和的数据，并且存储到切片中。
	s := make([]int, count)
	InitData(s)
	// 3:求和运算
	sum := SumAdd(s)
	fmt.Println("sum=",sum)

}
func InitData(num []int) {
	for i := 0; i < len(num); i++ {
		fmt.Printf("请输入第%d个数\n", i+1)
		fmt.Scan(&num[i])
	}
}
func SumAdd(num []int) int {
	var sum int
	for i := 0; i < len(num); i++ {
		sum += num[i]
	}
	return sum
}
