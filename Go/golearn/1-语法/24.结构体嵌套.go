package main

import "fmt"

type Person1 struct {
	name string
	age  int
}

type Student struct {
	// 第一种嵌套方式
	p     Person1
	score float32
}

type Student2 struct {
	// 第二种嵌套方式，匿名嵌套
	Person1
	score float32
}

func main() {
	/*第一种嵌套方式*/
	s := Student{
		Person1{"lisi", 18},
		95.1,
	}
	fmt.Println(s.p.name) // lisi
	s1 := Student{}
	s1.p.name = "wangwu"
	fmt.Println(s1.p.name) // wangwu

	/*第二种嵌套方式*/
	s2 := Student2{ // 初始化还是嵌套的
		Person1{"lisi", 18},
		95.1,
	}
	// 但赋值和取值，层级减少了
	s2.name = "wangwu"
	fmt.Println(s2.name)
}
