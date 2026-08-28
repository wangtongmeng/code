package main

type Duck interface {
	Gaga()
	Walk()
	Swimming()
}

// 接口定义
type pskDuck struct {
	legs int
}

func (pd *pskDuck) Gaga() {
	println("嘎嘎")
}
func (pd *pskDuck) Walk() {
	println("走路")
}
func (pd *pskDuck) Swimming() {
	println("游泳")
}

func main() {
	// go 语言的接口 鸭子类型（php python 都是鸭子类型）
	// go语言中处处都是interface，到处都是鸭子类型 duck typing

	var d Duck = &pskDuck{
		legs: 2,
	}
	d.Swimming() // 游泳

}
