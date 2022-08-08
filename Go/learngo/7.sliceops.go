package main

import "fmt"

func printSlice(s []int) {
	fmt.Printf("value=%v, len=%d, cap=%d\n", s, len(s), cap(s))
}

func main() {
	var s []int // Zero value for slice is nil (go语言没有null)
	for i := 0; i < 100; i++ {
		printSlice(s)
		s = append(s, 2*i+1)
	}
	fmt.Println(s)

	s1 := []int{2, 4, 6, 8}
	fmt.Println(s1)

	s2 := make([]int, 16)
	s3 := make([]int, 10, 32) // len=10 cap=32
	printSlice(s2)            // value=[0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0], len=16, cap=16
	printSlice(s3)            // value=[0 0 0 0 0 0 0 0 0 0], len=10, cap=32

	fmt.Println("copying slice")
	copy(s2, s1)
	printSlice(s2) // value=[2 4 6 8 0 0 0 0 0 0 0 0 0 0 0 0], len=16, cap=16

	fmt.Println("Deleting elements from slice")
	// 删除中间
	s2 = append(s2[:3], s2[4:]...)
	printSlice(s2) // value=[2 4 6 0 0 0 0 0 0 0 0 0 0 0 0], len=15, cap=16

	fmt.Println("Popping from front")
	front := s2[0]
	s2 = s2[1:]

	fmt.Println("Popping from back")
	tail := s2[len(s2)-1]
	s2 = s2[:len(s2)-1]
	fmt.Println(front, tail) // 2 0
	printSlice(s2)           // value=[4 6 0 0 0 0 0 0 0 0 0 0 0], len=13, cap=15
}
