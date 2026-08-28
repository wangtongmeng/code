package main

import "fmt"

func main() {
	// map是一个key(索引)和value(值)的无序集合，O(1)
	// map不是线程安全的，后面会通过sync调用
	var aMap = map[string]string{
		"a": "a",
		"b": "b",
		"c": "c",
	}

	// 取值
	fmt.Println(aMap["a"]) // a
	// 放值
	aMap["b"] = "b1"
	fmt.Println(aMap["b"]) // b1

	//var bMap map[string]string // nil map类型想要设置值必须要先初始化
	//bMap["a"] = "a"
	//fmt.Println(bMap)
	//// panic: assignment to entry in nil map

	// 初始化
	var bMap = map[string]string{}        // 初始化1
	var cMap = make(map[string]string, 3) // 初始化2 make是内置函数，主要用于初始化 slice map channel
	bMap["a"] = "a"
	cMap["a"] = "a"
	fmt.Println(bMap, cMap)

	// slice可以不初始化
	var m []string
	if m == nil {
		fmt.Println("yes") // yes
	}
	m = append(m, "a")
	fmt.Println(m) // [a]

	// 遍历
	for key, value := range aMap {
		fmt.Println(key, value)
	}
	// 只遍历值
	for _, value := range aMap {
		fmt.Print(value + " ")
	}
	fmt.Println()
	// 如果只有一个就是key
	for key := range aMap {
		fmt.Println(key, aMap[key])
	}

	// map指定key是否有值
	aMap1 := map[string]string{
		"a": "a",
		"c": "",
	}
	if _, ok := aMap1["a"]; !ok {
		fmt.Println("a not in aMap1")
	} else {
		fmt.Println("a in aMap1") // a in aMap1
	}
	if _, ok := aMap1["b"]; !ok {
		fmt.Println("b not in aMap1") // b not in aMap1
	} else {
		fmt.Println("b in aMap1")
	}
	if _, ok := aMap1["c"]; !ok {
		fmt.Println("c not in aMap1")
	} else {
		fmt.Println("c in aMap1") // c in aMap1
	}
	// 删除元素
	delete(aMap1, "a")
	delete(aMap1, "xxx") // 删除不存在的元素也不会报错
	fmt.Println(aMap1)   // map[c:]
}
