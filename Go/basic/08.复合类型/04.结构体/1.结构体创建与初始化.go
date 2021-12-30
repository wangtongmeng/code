package main

import "fmt"

type Student struct {
	id   int
	name string
	age  int
	addr string
}

func main() {

	// 全部初始化
	var s Student = Student{101, "张三", 18, "北京"}
	var s1 Student = Student{id: 101, name: "张三", age: 18, addr: "北京"}
	fmt.Println(s)  // {101 张三 18 北京}
	fmt.Println(s1) // {101 张三 18 北京}
	// 部分初始化
	s2 := Student{name: "李四", age: 18}
	var s3 Student = Student{name: "李四", addr: "上海"}
	fmt.Println(s2) // {0 李四 18 } 数字类型不填默认为0
	fmt.Println(s3) // {0 李四 0 上海}
	// 通过“结构体变量.成员” 完成初始化
	var stu Student
	stu.id = 102
	stu.name = "老王"
	stu.age = 28
	stu.addr = "北京"
	fmt.Println(stu) // {102 老王 28 北京}
}
