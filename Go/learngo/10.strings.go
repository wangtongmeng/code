package main

import (
	"fmt"
	"unicode/utf8"
)

/**
rune相当于go的char
- 使用range 遍历pos, rune对
- 使用utf8.RuneCountInString获得字符数量
- 使用len获得字节长度
- 使用[]byte获得字节
其他字符串操作
- Fields, Split, Join
- Contains, Index
- ToLower, ToUpper
- Trim, TrimRight, TrimLeft

面向对象
- go语言仅支持封装，不支持继承和多态
- go语言没有class, 只有struct
结构体的定义
*/
func main() {
	s := "Yes我爱慕课网!" // UTF-8
	fmt.Println(s)   // Yes我爱慕课网!
	for _, b := range []byte(s) {
		fmt.Printf("%X ", b) // 59 65 73 E6 88 91 E7 88 B1 E6 85 95 E8 AF BE E7 BD 91 21 中文是3字节4+15=19个字节
	}
	fmt.Println()
	for i, ch := range s { // ch is a rune
		fmt.Printf("(%d %X)", i, ch)
	}
	// (0 59)(1 65)(2 73)(3 6211)(6 7231)(9 6155)(12 8BFE)(15 7F51)(18 21) // 6211 是unicode 3是下标对应一个字节 由于有中文字符，所以index是不连续的

	fmt.Println(utf8.RuneCountInString(s)) // 9

	bytes := []byte(s)
	for len(bytes) > 0 {
		ch, size := utf8.DecodeRune(bytes)
		bytes = bytes[size:]
		fmt.Printf("%c ", ch) // Y e s 我 爱 慕 课 网 !
	}
	fmt.Println()

	for i, ch := range []rune(s) { // 转成rune slice
		fmt.Printf("(%d %c) ", i, ch) // (0 Y) (1 e) (2 s) (3 我) (4 爱) (5 慕) (6 课) (7 网) (8 !)
	}
	fmt.Println()
}
