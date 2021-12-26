package main

import "fmt"

func main() {
	s := []int{1, 2, 3, 4, 5, 6}
	for i := 0; i < len(s); i++ {
		fmt.Println(s[i]) // 123456
	}
	for i, v := range s {
		// for _,v:= range s {
		fmt.Println(i) // 012345
		fmt.Println(v) // 123456
	}
}
