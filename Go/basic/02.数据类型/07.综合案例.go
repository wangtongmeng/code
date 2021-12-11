package main

import "fmt"

/**
	请用户输入姓名，年龄，当用户输入完以后在屏幕上显示：您好：xx您的年龄是xx.
 */

func main() {
	// 1.定义变量
	var name string
	var age int
	// 2.给出相应的录入提示
	fmt.Println("请输入姓名：")
	fmt.Scan(&name)
	fmt.Println("请输入年龄")
	fmt.Scan(&age)
	// 3.完成输入
	// 4.打印输出结果
	fmt.Printf("您好：%s您的年龄是%d",name,age)
}
