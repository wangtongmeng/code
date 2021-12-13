package main

import "fmt"

// 1--100之间所有数字之和
func SumAdd(num int) { //形参
	var sum int
	for i := 1; i <= num; i++ {
		sum += i
	}
	fmt.Println(sum)
}
func Add(num1 int, num2 int) { //定义两个形参
	fmt.Println(num1 + num2)
}
func main() {
	SumAdd(200) //实参
	Add(3, 6)   //传递两个实参, 实参与形参的个数要保持一致，类型也要保持一致。
}

// 20100
// 9
