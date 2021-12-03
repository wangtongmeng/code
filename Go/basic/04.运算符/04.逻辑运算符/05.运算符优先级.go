package main

import "fmt"

/**
让用户输入一个年份，如果是闰年，则输出true，如果不是，则输出false

闰年的判定（符合下面两个条件之一）
- 年份能够被400整除.（2000）
- 年份能够被4整除但不能被100整除.（2008）
 */
func main() {
	fmt.Println("请输入要判断闰年的年份：")
	var year int
	fmt.Scan(&year)
	b := year % 400 == 0 || year % 4 == 0 && year % 100 !=0
	fmt.Println(b)
}
