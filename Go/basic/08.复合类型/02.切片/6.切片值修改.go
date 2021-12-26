package main

import "fmt"

func main() {
	s := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	s1 := s[2:5]
	s1[0] = 80
	// 修改截取切片中的值，原切片也会变
	fmt.Println(s, s1) // [1 2 80 4 5 6 7 8 9 10] [80 4 5]
}
