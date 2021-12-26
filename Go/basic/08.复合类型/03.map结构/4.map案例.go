package main

import "fmt"

func main() {
	//有一个英文字符串 统计每个字母出现的次数
	var str string = "helloworld"
	// 1；循环整个字符串，取出每个字母
	m := make(map[byte]int)
	for i := 0; i < len(str); i++ {
		ch := str[i] // ch='h' ch='e' ch='l' ch='l'
		m[ch] = m[ch] + 1
		// m['h']=1
		// m['e']=1
		// m['l']=1
		// m['l']=2
	}
	// 2；统计
	// 3:输出结果
	// h 1
	// e 1
	//l  3
	for key, value := range m {
		fmt.Printf("%c:%d\n", key, value)
	}

}
