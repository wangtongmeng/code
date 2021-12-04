package main

import "fmt"

func main() {
	// 输入数字，如果用户输入的是数字1，则输出星期一，如果输入的是2，则输出星期二...
	var data int
	fmt.Println("请输入数字")
	fmt.Scan(&data)
	switch data {
	case 1:
		fmt.Println("星期一")
	case 2:
		fmt.Println("星期二")
	case 3:
		fmt.Println("星期三")
	case 4:
		fmt.Println("星期四")
	case 5:
		fmt.Println("星期五")
	case 6:
		fmt.Println("星期六")
	case 7:
		fmt.Println("星期日")
	default:
		fmt.Println("输入的数字错误")
	}
}
