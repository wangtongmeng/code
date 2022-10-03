/**
函数
func eval(a, b int, op string) int
- 函数可返回多个值
function div(a, b int) (int, int) {
	return a / b, a % b
}
- 函数返回多个值时可以起名字
- 仅用于非常简单的函数
- 对于调用者而言没有区别
function div(a, b int) (q, r int) {
	q = a / b
	r = a % b
	return
}
- 函数作为参数
- 匿名函数
- 可变参数列表

函数语法回顾
- 返回值类型写在最后面
- 可返回多个值
- 函数作为参数
- 没有默认参数，可选参数

指针
- 指针不能运算
参数传递(值传递？引用传递？)
- go语言只有值传递一种方式
*/
package main

import (
	"fmt"
	"math"
	"reflect"
	"runtime"
)

func eval1(a, b int, op string) (int, error) {
	switch op {
	case "+":
		return a + b, nil
	case "-":
		return a - b, nil
	case "*":
		return a * b, nil
	case "/":
		//return a / b
		q, _ := div(a, b) // 不想用可以用_站位
		return q, nil
	default:
		//panic("unsupported operation: " + op) panic会终端程序 不是很好
		return 0, fmt.Errorf("unsupported operation: %s", op)
	}
}

// 13 / 3 = 4 ... 1
func div(a, b int) (q, r int) {
	//return a / b, a % b 推荐
	q = a / b
	r = a % b
	return
}

func apply(op func(int, int) int, a, b int) int {
	p := reflect.ValueOf(op).Pointer()
	opName := runtime.FuncForPC(p).Name()
	fmt.Printf("Calling function %s with args"+"%d, %d\n", opName, a, b)
	return op(a, b)
}

func pow(a, b int) int {
	return int(math.Pow(float64(a), float64(b)))
}

func sum(numbers ...int) int {
	s := 0
	for i := range numbers {
		s += numbers[i]
	}
	return s
}

func swap(a, b *int) {
	*b, *a = *a, *b
}

func swap1(a, b int) (int, int) {
	return b, a
}

func pointer() {
	var a int = 2
	var pa *int = &a
	*pa = 3
	fmt.Println(a) // 3
	// 指针不能运算
}

func main() {
	//fmt.Println(eval1(3,4,"x"))
	if result, err := eval1(3, 4, "x"); err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println(result)
	}
	q, r := div(13, 3)
	fmt.Println(q, r)

	//fmt.Println(apply(pow, 3, 4))
	// 匿名函数
	fmt.Println(apply(func(a int, b int) int {
		return int(math.Pow(float64(a), float64(b)))
	}, 3, 4))
	// Calling function main.pow with args3, 4
	// 81
	fmt.Println(sum(1, 2, 3, 4, 5))

	a, b := 3, 4
	swap(&a, &b)
	a1, b1 := swap1(a, b)
	fmt.Println(a, b, a1, b1)

	pointer()

}
