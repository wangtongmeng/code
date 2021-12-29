package main

import "fmt"

func main() {
	var s1 []int
	s2 := []int{}
	s3 := make([]int, 3, 5)       // 长度不能大于容量
	fmt.Println(s1, s2, s3)       // [] [] [0 0 0]
	fmt.Println(len(s3), cap(s3)) // 3 5
}
