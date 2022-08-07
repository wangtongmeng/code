/**
循环语句
for
- for的条件里不需要括号
- for的条件里可以省略初始条件，结束条件，递增表达式
- 省略初始条件，相当于while
- 无限循环

回顾
- for, if 后面的条件没有括号
- if 条件里也可定义变量
- 没有 while
- switch 不需要break，也可以直接switch多个条件

 */
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func convertToBin(n int) string {
	result := ""
	for ; n > 0; n /= 2 {
		lsb := n % 2
		result = strconv.Itoa(lsb) + result
	}
	return result
}

func printFile(filename string) {
	file, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	scanner := bufio.NewScanner(file)
	for scanner.Scan() { // 省略初始和递增条件，相当于while
		fmt.Println(scanner.Text())
	}
}

func forever() { // 死循环
	for {
		fmt.Println("abc")
	}
}

func main() {
	fmt.Println(
		convertToBin(5), // 101
		convertToBin(13), // 1101
	)

	printFile("abc.txt")
	forever()
}
