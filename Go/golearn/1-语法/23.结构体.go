package main

import "fmt"

type Person struct {
	name string
	age  int
}

func main() {
	/*初始化结构体*/

	// 方式1
	p1 := Person{"li4", 20} // 必须全部
	// 方式2
	p2 := Person{name: "li4"} // 可以不用全部
	// 方式3
	var persons []Person
	persons = append(persons, p1)
	persons = append(persons, Person{name: "li4"})
	// 方式4
	persons2 := []Person{
		{"li4", 20},
		{name: "li4"},
	}
	fmt.Println(p1, p2, persons, persons2) // {li4 20} {li4 0} [{li4 20} {li4 0}] [{li4 20} {li4 0}]

	/*赋值 取值*/
	var p3 Person
	p3.age = 23
	fmt.Println(p3.age) // 23

	/*匿名结构体，匿名函数*/
	address := struct {
		province string
		city     string
		address  string
	}{
		province: "北京市",
		city:     "海淀区",
		address:  "xxx",
	}
	fmt.Println(address, address.city) // {北京市 海淀区 xxx} 海淀区

}
