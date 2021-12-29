package main

import "fmt"

func main() {
	var m map[int]string = map[int]string{1: "王五", 2: "李四"}
	// 通过key取值
	fmt.Println(m[2]) // 李四

	value, ok := m[6]
	if ok {
		fmt.Println(value)
	} else {
		fmt.Println(value)
		fmt.Println("不存在") // 不存在
	}

	for key, value := range m {
		fmt.Println(key)   //12
		fmt.Println(value) // 王五 李四
	}
	delete(m, 2)
	fmt.Println(m) // map[1:王五]

}
