package main

import (
	"fmt"
)

func main() {

	// 普通写法

	// 死循环
	//var i int
	//for {
	//	time.Sleep(2 * time.Second)
	//	fmt.Println(i)
	//	i++
	//}

	// for 嵌套
	for y := 1; y <= 9; y++ {
		for x := 1; x <= y; x++ {
			fmt.Printf("%d * %d = %d ", x, y, x*y)
		}
		fmt.Println()
	}
	/*
		1 * 1 = 1
		1 * 2 = 2 2 * 2 = 4
		1 * 3 = 3 2 * 3 = 6 3 * 3 = 9
		1 * 4 = 4 2 * 4 = 8 3 * 4 = 12 4 * 4 = 16
		1 * 5 = 5 2 * 5 = 10 3 * 5 = 15 4 * 5 = 20 5 * 5 = 25
		1 * 6 = 6 2 * 6 = 12 3 * 6 = 18 4 * 6 = 24 5 * 6 = 30 6 * 6 = 36
		1 * 7 = 7 2 * 7 = 14 3 * 7 = 21 4 * 7 = 28 5 * 7 = 35 6 * 7 = 42 7 * 7 = 49
		1 * 8 = 8 2 * 8 = 16 3 * 8 = 24 4 * 8 = 32 5 * 8 = 40 6 * 8 = 48 7 * 8 = 56 8 * 8 = 64
		1 * 9 = 9 2 * 9 = 18 3 * 9 = 27 4 * 9 = 36 5 * 9 = 45 6 * 9 = 54 7 * 9 = 63 8 * 9 = 72 9 * 9 = 81
	*/

	// for range 字符串 数组 切片 map channel
	/**
	字符串    字符串的索引(key)  字符串对应的索引的字符串值的拷贝(value)   如果不写 key，那么返回的是索引
	数组      数组的索引        索引对饮的值的拷贝                      如果不写 key，那么返回的是索引
	切片		 切片的索引         索引对应的值的拷贝                     如果不写 key，那么返回的是索引
	map      map 的 key       value 返回的是 key 对应的值的拷贝       如果不写 key，那么返回的是 map 的值
	channel                   value 返回的是 channel 接受的数据

	*/
	name := "ab cd"
	//for _, value := range name { // 占位
	for index, value := range name {
		fmt.Printf("%d = %c\n", index, value)
	}
	/**
	1 = b
	2 =
	3 = c
	4 = d
	*/

	// 遍历中文
	// 1.取不到的 name1[index]取一个字节，中文有三个字节
	name1 := "张三"
	for index := range name1 {
		fmt.Printf("%c\r\n", name1[index])
	}
	/**
	å
	ä
	*/
	// 2.转rune
	name2 := "张三"
	name2Rune := []rune(name2)
	//for index := range name2 {
	//	fmt.Printf("%c ", name2Rune[index])
	//}
	// 张 panic: runtime error: index out of range [3] with length 2

	for i := 0; i < len(name2Rune); i++ {
		fmt.Printf("%c ", name2Rune[i])
	}
	// 张 三
	fmt.Println()
	// 3.通过value取没问题，go内部处理了
	name3 := "张三"
	for _, value := range name3 {
		fmt.Printf("%c ", value)
	}
	// 张 三

	// for循环退出
	for i := 0; i < 10; i++ {
		if i == 2 {
			continue
		}
		if i == 6 {
			break
		}
		fmt.Println(i)
	}
	/**
	1
	3
	4
	5
	*/

}
