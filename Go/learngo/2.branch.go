/**
条件语句
if
- if的条件里可以赋值
- if的条件里赋值的变量作用域就在这个if语句里

switch
- switch 会自动break，除非使用fallthrough
- switch后可以没有表达式，在case里写也可以
 */
package main

import (
	"fmt"
	"io/ioutil"
)

func ifExample () {
	// 当前项目根目录
	const filename = "abc.txt"
	//contents, err := ioutil.ReadFile(filename)
	//if err != nil {
	//	fmt.Println(err)
	//} else {
	//	fmt.Printf("%s\n", contents)
	//}
	if contents, err := ioutil.ReadFile(filename); err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("%s\n", contents)
	}
}

func eval(a,b int,op string) int {
	var result int
	switch op {
	case "+":
		result = a + b
	case "-":
		result = a - b
	case "*":
		result = a*b
	case "/":
		result = a/b
	default:
		panic("unsupported operator:" + op)
	}
	return result
}

func grade(score int) string {
	g := ""
	switch { // switch后可以没有表达式，在case里写也可以
	case score < 0 || score > 100:
		panic(fmt.Sprintf("Wrong score: %d", score))
	case score < 60:
		g="F"
	case score < 80:
		g="C"
	case score < 90:
		g="B"
	case score <=100:
		g="A"
	}
	return g
}

func main() {
	ifExample()
	// switch
	fmt.Println(eval(1,2,"+"))
	fmt.Println(
		grade(0),
		grade(59),
		grade(60),
		grade(82),
		grade(99),
		grade(100),
		//grade(-1), 中断执行
		)
}
