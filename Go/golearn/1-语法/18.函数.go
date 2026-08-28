package main

import (
	"fmt"
	"time"
)

// 类型简写
func add(a, b int) int {
	return a + b
}
func add1(a int, b int) int {
	return a + b
}

// 返回多值
func add2(a int, b int) (int, error) {
	return a + b, nil
}

// 给返回值定义变量
func add3(a, b int) (sum int, err error) {
	return sum, err
}

// 如果我们给返回值加了变量，直接return，默认会返回sun err
func add4(a, b int) (sum int, err error) {
	return
}

// 省略号 变长参数(本质是slice)
func add5(items ...int) (sum int, err error) {
	for _, value := range items {
		sum += value
	}
	return sum, err
}

// 固定参数+变长参数
func add6(desc string, items ...int) (sum int, err error) {
	for _, value := range items {
		sum += value
	}
	return sum, err
}

// 不返回值
func runForEver() {
	for {
		time.Sleep(1 * time.Second)
		fmt.Println("doing")
	}
}
func main() {
	// go函数支持普通函数、匿名函数、闭包
	/**
	go中函数是“一等公民”
		1.函数本身可以当作变量
		2.匿名函数、闭包
		3.函数可以满足接口

	函数参数传递
	*/

	sum := add(1, 2)
	sum1 := add1(1, 2)
	sum2, _ := add2(1, 2)
	fmt.Println(sum, sum1, sum2)
}
