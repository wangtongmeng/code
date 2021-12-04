package main

import "fmt"

func main() {
	var age int = 18
	if age >= 18 {
		fmt.Println("成年")
	} else {
		fmt.Println("未成年")
	}

	// 小王的考试成绩大于等于90分，那么爸爸奖励他100元，否则跪方便面

	var score int
	fmt.Println("请输入考试成绩：")
	fmt.Scan(&score)
	if score >= 90 {
		fmt.Println("奖励100元")
	} else {
		fmt.Println("跪方便面")
	}



}
