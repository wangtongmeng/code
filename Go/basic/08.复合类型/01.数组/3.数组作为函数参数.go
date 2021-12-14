package main

import "fmt"

func main() {
	var Numbers [5]int = [5]int{1, 2, 3, 4, 5}
	getPrint(Numbers)
}
func getPrint(n [5]int) {
	for i := 0; i < len(n); i++ {
		fmt.Println(n[i])
	}
}
