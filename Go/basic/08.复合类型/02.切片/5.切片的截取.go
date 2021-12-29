package main

import "fmt"

func main() {
	s := []int{1, 2, 3, 4, 5, 6}
	// 第一个值：截取的起始位置
	// 第二个值;截取的终止位置（不包含该值的）
	// 第三个值：用来计算容量，容量指的是切片中最多能够容纳多少元素。
	// 容量=第三个值减去第一个值。
	// 长度=第二个值减去第一个值
	s1 := s[1:3:5]
	fmt.Println(s1, len(s1), cap(s1)) // [2 3] 2 4

	s2 := s[:]                        // 相当于复制
	fmt.Println(s2, len(s2), cap(s2)) // [1 2 3 4 5 6] 6 6

	s3 := s[1:]                       // 只声明起始位置
	fmt.Println(s3, len(s3), cap(s3)) // [2 3 4 5 6] 5 5

	s4 := s[:3]                       // 只声明终止位置
	fmt.Println(s4, len(s4), cap(s4)) // [1 2 3] 3 6

	s5 := s[1:3]                      // 声明起始和终止位置
	fmt.Println(s5, len(s5), cap(s5)) // [2 3] 2 5
}
