package main

import "fmt"

/*单个返回值*/

func AddResult(num1 int, num2 int) int { // 表示指定函数返回的数据的类型。
	var sum int = num1 + num2
	return sum //将变量sum中存储的值返回。
}

// 表明：最终会返回整型变量sum中的，在函数体中没有必要在重新创建sum变量。
func AddResult1(num1 int, num2 int) (sum int) {
	sum = num1 + num2
	return sum
}

//如果已经指定了返回的变量的名称，那么return后面可以不用在加上变量的名称。
func AddResult2(num1 int, num2 int) (sum int) {
	sum = num1 + num2
	return
}

/*多个返回值*/
// func AddResult(num1 int, num2 int) (sum int) {
// 	// var sum int
// 	sum = num1 + num2
// 	return //如果已经指定了返回的变量的名称，那么return后面可以不用在加上变量的名称。
// }
func GetResult1() (num1 int, num2 int) {
	num1 = 10
	num2 = 20
	return
}
func main() {
	var s int = AddResult(3, 6)
	fmt.Println(s) // 9
	var t1, t2 = GetResult1()
	fmt.Println(t1, t2) // 10 20
}
