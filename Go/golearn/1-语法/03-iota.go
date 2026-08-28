package main

import "fmt"

func a() (int, bool) {
	return 0, false
}

func main() {
	// 匿名变量
	var _ int
	// 不需要的用_占位
	_, ok := a()
	if ok {
		//...
	}
 
	// iota，特殊常量，可以认为是一个可以被编译器修改的常量
	/**
	如果中断了iota那么必须显示的恢复，后续会自动递增
	自增类型默认是int类型
	iota能够简化const类型的定义
	每次出现const时，iota初始化为0
	*/

	const (
		ERR1 = iota
		ERR2
		ERR3
	)
	fmt.Println(ERR1, ERR2, ERR3) // 0 1 2

	const (
		ERR4 = iota + 1
		ERR5
		ERR6
	)

	fmt.Println(ERR4, ERR5, ERR6) // 1 2 3

	const (
		ERR11 = iota + 1
		ERR22
		ERR33 = "ha" // iota 内部仍然会增加计数器
		ERR44
		ERR55 = iota
	)
	fmt.Println(ERR11, ERR22, ERR33, ERR44, ERR55) // 1 2 ha ha 4

}
