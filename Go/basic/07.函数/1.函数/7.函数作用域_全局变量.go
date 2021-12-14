package main

import "fmt"

var b int

func main() {
	b = 20 // 这里用的是=
	TestB()
	fmt.Println("main", b) // 20
}
func TestB() {
	var b int
	b = 30
	fmt.Println("TestB:", b) // 30
}
