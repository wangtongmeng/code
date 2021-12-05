package main

import "fmt"

func main() {
	// 找出100-999间的水仙花数
	// 水仙花：是指一个三位数，它的每位数字的立方和等于其本身
	// 153 =1+125+27
	// 1: 构建循环条件
	var h int // 百位
	var t int // 十位
	var b int // 个位
	for i := 100; i <= 999; i++ {
		// ctrl+alt+l //快速排版的快捷键
		// 2: 进行计算
		h = i / 100
		t = i % 100 / 10
		b = i % 10
		if h*h*h+t*t*t+b*b*b == i {
			fmt.Println(i)
		}
	}

	// 3: 打印输出结果
	// 153
	// 370
	// 371
	// 407

}
