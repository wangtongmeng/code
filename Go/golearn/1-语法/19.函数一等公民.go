package main

import "fmt"

func add11(items ...int) (sum int, err error) {
	for _, value := range items {
		sum += value
	}
	return sum, err
}

// 返回值是函数
func cal(op string, items ...int) func() {
	switch op {
	case "+":
		return func() {
			fmt.Println("加法")
		}
	case "-":
		return func() {
			fmt.Println("减法")
		}
	default:
		return func() {
			fmt.Println("非+-法")
		}
	}
}

func cal1(myFunc func(items ...int) int) int {
	return myFunc()
}

func callback(y int, f func(int, int)) {
	f(y, 2)
}

func autoIncrement() func() int {
	local := 0 // 一个函数访问另一个函数的局部变量不行，但闭包可以
	return func() int {
		local += 1
		return local
	}
}

func main() {
	funcVar := add11
	a := 1
	b := 2
	sum, _ := funcVar(a, b, 3, 4)
	fmt.Println(sum) // 10

	cal("+", a, b)() // 加法

	cal1(func(items ...int) int {
		sum := 0
		for _, item := range items {
			sum += item
		}
		return sum
	})

	// 匿名函数
	callback(1, func(a, b int) {
		fmt.Println(a + b) // 3
	})
	// 匿名函数赋值给变量
	localFunc := func(a, b int) {
		fmt.Println(a + b) // 3
	}
	callback(1, localFunc) // 3

	// 闭包
	nextFunc := autoIncrement()
	for i := 0; i < 5; i++ {
		fmt.Print(nextFunc()) // 12345
	}
}
