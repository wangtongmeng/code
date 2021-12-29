package main

import "fmt"

func main() {
	var m1 map[int]string = map[int]string{1: "张三", 2: "李四", 3: "王五", 4: "itcast"} // key是唯一的
	m2 := map[int]string{1: "张三", 2: "李四", 3: "王五", 4: "itcast"}
	m3 := make(map[string]int, 10)
	m3["张三"] = 12
	m3["李四"] = 15
	m3["张三"] = 16            //完成数据的修改。
	fmt.Println(m1)          // map[1:张三 2:李四 3:王五 4:itcast]
	fmt.Println(m2)          // map[1:张三 2:李四 3:王五 4:itcast]
	fmt.Println(m3, len(m3)) // map[张三:16 李四:15] 2 len()返回的是map中已有的键值对个数。
}
