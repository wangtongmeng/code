package main

import "fmt"

func main() {
	var name string = "lisi"
	fmt.Printf("%s\n", name) // lisi
	str:="a"
	fmt.Printf("%T", str) // string
	fmt.Println(len(name)) // 4
	fmt.Println((len("你好"))) // 6 一个汉字占3个字符
}
