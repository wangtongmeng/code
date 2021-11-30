package main

import "fmt"

func main() {
	var num int = 10
	num = num + 1
	num++ // 将num变量中的值取出来+1运算，再重新赋值给变量num。注意：++只能写在变量名的后面
	num--
	fmt.Println("num =",  num)
}