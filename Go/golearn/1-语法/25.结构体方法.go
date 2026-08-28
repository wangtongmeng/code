package main

import "fmt"

type Person11 struct {
	name string
	age  int
}

// 接收器两种形态：值传递，指针（省空间）
func (p Person11) print() {
	p.age = 20 // 修改无效
	fmt.Printf("name:%s, age:%d\r\n", p.name, p.age)
}
func (p *Person11) changeAge() {
	// 当指针指向结构体时，go做了处理，我们不需要根据指针取值再修改，可以直接修改
	p.age = 21
}

func main() {
	p := Person11{"lisi", 18}
	p.print()          // name:lisi, age:20
	fmt.Println(p.age) // 18 没变
	p.changeAge()
	fmt.Println(p.age) // 21 变了

}
