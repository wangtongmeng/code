package main

import "fmt"

var b int
func main() {
 b = 20
 TestB()
	fmt.Println("main:",b)
}
func TestB()  {
	var b int
	b = 30
	fmt.Println("TestB:",b)

}
