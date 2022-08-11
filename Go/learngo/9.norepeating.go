package main

import (
	"fmt"
)

func lengthOfNonRepeatingSubStr(s string) int {
	lastOccurred := make(map[rune]int) // byte换成rune
	start := 0
	maxLength := 0

	for i, ch := range []rune(s) { // byte换成rune就能处理中文字符了
		if lastI, ok := lastOccurred[ch]; ok && lastI >= start {
			start = lastI + 1
		}
		if i-start+1 > maxLength {
			maxLength = i - start + 1
		}
		lastOccurred[ch] = i
	}

	return maxLength
}

func main() {
	fmt.Println(
		lengthOfNonRepeatingSubStr("abcabcbb"))
	fmt.Println(
		lengthOfNonRepeatingSubStr("bbbbb"))
	fmt.Println(
		lengthOfNonRepeatingSubStr("pwwkew"))
	fmt.Println(
		lengthOfNonRepeatingSubStr(""))
	fmt.Println(
		lengthOfNonRepeatingSubStr("b"))
	fmt.Println(
		lengthOfNonRepeatingSubStr("abcdef"))
	fmt.Println(
		lengthOfNonRepeatingSubStr("这里是慕课网"))
	fmt.Println(
		lengthOfNonRepeatingSubStr("一二三二一"))
	fmt.Println(
		lengthOfNonRepeatingSubStr(
			"黑化肥挥发发灰会花飞灰化肥挥发发黑会飞花"))
}
