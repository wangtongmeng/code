package main

import "fmt"

func main() {
	var m map[int]string = map[int]string{1: "张三", 2: "李四"}
	DeleteMap(m)
	PrintMap(m)
	fmt.Println(m) // map[1:张三]

}
func PrintMap(m map[int]string) {
	for key, value := range m {
		fmt.Println(key, value)
	}
}
func DeleteMap(m map[int]string) {
	delete(m, 2)
}
