package main

import (
	"fmt"
	"strings"
)

func main() {
	// 字符串的比较
	a := "a"
	b := "b"

	// 是否相等
	fmt.Println(a != b) // true

	// 大小比较
	fmt.Println(a > b) // false

	// 是否包含
	fmt.Println(strings.Contains("a", "a")) // true
	// 出现次数
	fmt.Println(strings.Count("abc", "a")) // 1
	// 分割字符串
	fmt.Println(strings.Split("a-b-c", "-")) // [a b c]
	// 是否包含前缀
	fmt.Println(strings.HasPrefix("abc", "a")) // true
	// 是否包含后缀
	fmt.Println(strings.HasSuffix("abc", "a")) // false
	// 查询子串出现的位置
	fmt.Println(strings.Index("abc", "bc")) // 1
	// 子串替换
	fmt.Println(strings.Replace("aaa", "a", "b", -1)) // n -1 全部替换 bbb
	fmt.Println(strings.Replace("aaa", "a", "b", 1))  // n 11 替换一个 baa
	// 大小写转换
	fmt.Println(strings.ToLower("GO"))
	fmt.Println(strings.ToUpper("go"))
	// 去掉特殊字符
	fmt.Println(strings.Trim(" hello go ", " "))        // hello go
	fmt.Println(strings.Trim("#hello#go#", "#"))        // hello#go
	fmt.Println(strings.Trim("#$hello#go#", "#$"))      // hello#go
	fmt.Println(strings.TrimLeft("#$hello#go#", "#$"))  // hello#go#
	fmt.Println(strings.TrimRight("#$hello#go#", "#$")) // #$hello#go
}
