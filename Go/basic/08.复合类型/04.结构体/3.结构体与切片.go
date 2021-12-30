package main

import "fmt"

type Student struct {
	id   int
	name string
	age  int
	addr string
}

func main() {

	var s []Student = []Student{
		{101, "张三", 18, "北京"},
		{102, "李四", 18, "北京"},
	}
	fmt.Println(s[0], s[0].age) // {101 张三 18 北京} 18
	s[0].age = 20
	fmt.Println(s) // [{101 张三 20 北京} {102 李四 18 北京}]
	// 循环遍历
	for i := 0; i < len(s); i++ {
		fmt.Println(s[i].name) // 张三 李四
	}
	for k, v := range s {
		fmt.Println(k)    // 0 1
		fmt.Println(v.id) // 101 102
	}
	// 追加数据
	s = append(s, Student{103, "王五", 20, "北京"})
	fmt.Println(s) // [{101 张三 20 北京} {102 李四 18 北京} {103 王五 20 北京}]
}
