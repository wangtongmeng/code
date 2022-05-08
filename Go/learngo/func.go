/**
函数
func eval(a, b int, op string) int
 */
package main

import "fmt"

func eval1(a, b int, op string) int {
	switch op {
	case "+":
		return a + b
	case "-":
		return a - b
	case "*":
		return a * b
	case "/":
		//return a / b
		q, _ := div(a, b)
		return q
	default:
		panic("unsupported operation: " + op)
	}
}
// 13 / 3 = 4 ... 1
func div(a, b int) (q, r int) {
	//return a / b, a % b
	q = a / b
	r = a % b
	return
}

func main() {
	fmt.Println(eval1(3,4,"*"))
	q, r := div(13, 3)
	fmt.Println(q, r)
}
