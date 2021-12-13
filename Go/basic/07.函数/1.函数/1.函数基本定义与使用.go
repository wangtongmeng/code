package main

import "fmt"

func eat() {
	fmt.Println("eat")
}
func drink() {
	fmt.Println("drink")
}
func main() {
	eat()
	drink()
	eat()
}

// eat
// drink
// eat
