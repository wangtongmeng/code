package main

import "fmt"

type Student struct {
	id   int
	name string
	age  int
	addr string
}

func main() {

	stu := Student{101, "张三", 18, "北京"}
	Change(stu)
	fmt.Println(stu) // {101 张三 18 北京} 未改变
}

func Change(stu Student) {
	stu.age = 20
	fmt.Println(stu) // {101 张三 20 北京}
}
