package main

import "fmt"

func main() {
	var a int8
	var b int16
	var c int32
	var d int64
	var e int // 动态类型

	a = int8(b) // b如果太大精度会丢失

	var f float32
	var g float64

	fmt.Println(a, b, c, d, e, f, g) // 0 0 0 0 0 0 0

	// 纯英文用byte 中英文都有用rune
	var a1 byte // 主要用于存放字符，unit8
	a1 = 'a'
	fmt.Printf("a1=%c b1=%c", a1) // c=a

	var b1, b2 rune // 也是字符 int32
	b1 = 'a'
	b2 = '王'
	fmt.Printf("b1=%c b2=%c", b1, b2) // a1=a b1=%!c(MISSING)b1=a b2=王

	var name string
	name = "li4"
	fmt.Println(name)
}
