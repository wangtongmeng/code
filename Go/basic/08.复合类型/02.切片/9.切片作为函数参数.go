package main

import "fmt"

func main() {
	s := make([]int, 10)

	Init(s)
	fmt.Println(s) // [0 1 2 3 4 5 6 7 8 9] 修改了
}
func Init(num []int) {
	for i := 0; i < len(num); i++ {
		num[i] = i
	}
}
