package main

import "fmt"

/**
某学生三门课成绩为，语文：90，数学：89，英语：69，编程求总分与平均分
 */
func main() {
	var chinese int = 90
	var math int = 89
	var english int = 69
	score := chinese+math+english
	avg := float64(score)/3 // 注意先把总分转换成浮点型
	fmt.Printf("总分为：%d\n", score) // 248
	fmt.Printf("平均分：%.2f", avg) // 82.67
}