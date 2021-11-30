package main

import "fmt"

/**
输入半径，计算圆的面积和周长并打印出来（PI为3.14）。
	周长：2*PI*r
	面积：PI*r*r
 */
func main() {
	const PI = 3.14
	fmt.Println("请输入半径：")
	var r float64
	fmt.Scan(&r)
	area := PI*r*r
	p := 2*PI*r
	fmt.Printf("面积是%.2f\n", area)
	fmt.Printf("周长是%.2f", p)
}
