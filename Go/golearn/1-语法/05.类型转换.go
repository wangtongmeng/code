package main

import (
	"fmt"
	"strconv"
)

func main() {
	// 数字类型转换

	// 1.数字转数字
	var a int = 12
	var f float32 = 3.14
	var a2 = int32(f) // 精度丢失
	var f64 = float64(a)
	fmt.Println(a, f, a2, f64) // 12 3.14 3 12

	// 2.自定义类型
	type IT int // 定义int别名，int不能直接给IT赋值，需要IT转换
	var c IT = IT(a)
	fmt.Println(c) // 12

	// 3.字符串转数字
	var istr = "12"
	myint, err := strconv.Atoi(istr)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(myint) // 12

	// 4.数字转字符串
	var myi = 32
	fmt.Println(strconv.Itoa(myi)) // 32 数字转字符串一定会成功，不需要处理错误

	// 5.字符串转float32
	float, err := strconv.ParseFloat("3.1415", 61)
	if err != nil {
		return
	}
	fmt.Println(float) // 3.1415

	parseInt, err := strconv.ParseInt("-42", 10, 64) // base 进制
	if err != nil {
		return
	}
	fmt.Println(parseInt) // -42

	// 6.字符串转bool
	// "true" -> true
	// "0" -> false
	//"1" -> true
	parseBool, err := strconv.ParseBool("true")
	if err != nil {
		return
	}
	fmt.Println(parseBool) // true

	// 7.基本类型转字符串
	boolStr := strconv.FormatBool(true)
	fmt.Println(boolStr)
	floatStr := strconv.FormatFloat(3.1415, 'E', -1, 64)
	fmt.Println(floatStr) // 3.1415E+00
	floatStr1 := strconv.FormatFloat(3.1415, 'f', -1, 64)
	fmt.Println(floatStr1) // 3.1415

	// 进制转换
	fmt.Println(strconv.FormatInt(-42, 16)) // -2a

	/**
	数字转字符串 strconv.Itoa
	进制转换 strconv.FormatInt
	*/

}
