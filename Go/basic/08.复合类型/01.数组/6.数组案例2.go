package main

import "fmt"

func main() {
	// 有一个字符串数组： { "马龙", "迈克尔乔丹", "雷吉米勒", "蒂姆邓肯", "科比布莱恩特" },请输出最长的字符串。
	// 1: 定义一个字符串数组
	names := [...]string{"马龙", "迈克尔乔丹", "雷吉米勒", "蒂姆邓肯", "科比布莱恩特"}
	// 2: 定义一个变量存储最长的字符串
	var max string = names[0]
	// 3: 循环遍历数组
	for i := 0; i < len(names); i++ {
		if len(names[i]) > len(max) {
			max = names[i]
		}
	}
	fmt.Println(max)
}
