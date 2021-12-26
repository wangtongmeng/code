package main

import "fmt"

func main() {
	var s []int
	s = append(s, 1, 2, 3, 4, 5, 6)
	s[3] = 88            // 修改值
	fmt.Println(s, s[3]) // [1 2 3 88 5 6] 88

	s1 := []int{2, 3, 4, 5, 6}
	s1 = append(s1, 99, 100)
	s1[0] = 78
	fmt.Println(s1, s1[0]) // [78 3 4 5 6 99 100] 78

	s2 := make([]int, 3, 10)
	for i := 0; i < len(s2); i++ {
		s2[i] = i + 1
	}
	s2 = append(s2, 80)
	s2[3] = 90
	fmt.Println(s2) // [1 2 3 90]
}
