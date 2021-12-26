package main

import "fmt"

func main() {
	s := make([]int, 5, 8)
	s = append(s, 1)
	s = append(s, 2)
	s = append(s, 3)
	s = append(s, 4)
	// 容量不够会扩容
	fmt.Println(s, len(s), cap(s)) // [0 0 0 0 0 1 2 3 4] 9 16
}
