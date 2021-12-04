package main

import "fmt"

func main()  {
	// 考试成绩大于等于90输出A，大于等于80输出B，大于等于70输出C，大于等于60输出D，不及格输出E
	var score float64
	fmt.Println("请输入考试成绩")
	fmt.Scan(&score)
	switch {
	case score >= 90:
		fmt.Println("A")
	case score >= 80:
		fmt.Println("B")
	case score >= 70:
		fmt.Println("C")
	case score >= 60:
		fmt.Println("D")
	default:
		fmt.Println("E")
	}
}
