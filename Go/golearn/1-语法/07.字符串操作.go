package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	// 1.转义符
	fmt.Println("li\"4\"", `li"4"`) // li"4" li"4"

	fmt.Print("hello\r\n")
	fmt.Print("world\r\n")

	// 2.格式化输出

	// 字符串拼接
	username := "li4"
	age := 18
	address := "北京"
	mobile := "123132"
	fmt.Println(username)
	fmt.Println("用户名："+username, "，年龄："+strconv.Itoa(age)+"，地址："+address, "电话："+mobile) // 极难维护
	fmt.Printf("用户名：%s，年龄：%d，地址：%s，电话：%s\r\n", address, age, mobile, address)           // 用户名：北京，年龄：18，地址：123132，电话：北京 常用，性能没有上面的好
	// Sprintf会返回字符串 Printf不会
	userMsg := fmt.Sprintf("用户名：%s，年龄：%d，地址：%s，电话：%s\r\n", address, age, mobile, address) // 常用
	fmt.Println(userMsg)

	// 通过string的builder进行字符串拼接，高性能
	var builder strings.Builder
	builder.WriteString("用户名：")
	builder.WriteString(username)
	builder.WriteString("年龄：")
	builder.WriteString(strconv.Itoa(age))

	re := builder.String()
	fmt.Println(re) // 用户名：li4年龄：18
	// 查看类型
	fmt.Printf("年龄：%T", age) // 年龄：int

}
