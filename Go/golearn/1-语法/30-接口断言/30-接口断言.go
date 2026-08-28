package main

import (
	"fmt"
	"strings"
)

func add(a, b int) int {
	return a + b
}

// 类型写死每次都要新增函数
//
//	func addint32(a, b int32) int32 {
//		return a + b
//	}

func add1(a, b interface{}) interface{} {
	switch a.(type) {
	case int:
		ai, _ := a.(int)
		bi, _ := b.(int)
		return ai + bi
	case int32:
		ai, _ := a.(int32)
		bi, _ := b.(int32)
		return ai + bi
	case string:
		as, _ := a.(string)
		bs, _ := b.(string)
		return as + bs
	default:
		panic("不支持的类型")
	}
}

func main() {
	re := add1("abc", "def")
	fmt.Println(re)
	res, _ := re.(string) // 断言成string
	strings.Split(res, " ")
}
