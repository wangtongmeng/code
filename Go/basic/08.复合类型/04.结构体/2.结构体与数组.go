package main

import "fmt"

type Student struct {
	id   int
	name string
	age  int
	addr string
}

func main() {

	var arr [3]Student = [3]Student{
		{101, "张三", 18, "北京"},
		{102, "李四", 18, "北京"},
		{103, "王五", 19, "北京"},
	}

	fmt.Println(arr)        // [{101 张三 18 北京} {102 李四 18 北京} {103 王五 19 北京}]
	fmt.Println(arr[0])     // {101 张三 18 北京}
	fmt.Println(arr[0].age) // 18
	arr[0].age = 20
	fmt.Println(arr) // [{101 张三 20 北京} {102 李四 18 北京} {103 王五 19 北京}]

	// 通过循环来输出结构体数组中的内容。
	for i := 0; i < len(arr); i++ {
		fmt.Println(arr[i].name) // 张三  李四 王五
	}

	for k, v := range arr {
		fmt.Println(k)     // 0 1 2
		fmt.Println(v.age) // 20 18 19
	}
}
