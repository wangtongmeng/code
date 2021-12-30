package main

import "fmt"

type Student struct {
	id   int
	name string
	age  int
	addr string
}

func main() {
	m := make(map[int]Student)
	m[1] = Student{101, "张三", 18, "北京"}
	m[2] = Student{102, "李四", 18, "北京"}
	fmt.Println(m)               // map[1:{101 张三 18 北京} 2:{102 李四 18 北京}]
	fmt.Println(m[1], m[1].name) // {101 张三 18 北京} 张三
	delete(m, 2)
	fmt.Println(m) // map[1:{101 张三 18 北京}]
	// 遍历
	for key, value := range m {
		fmt.Println(key)               // 1
		fmt.Println(value, value.name) // {101 张三 18 北京}
	}
}
