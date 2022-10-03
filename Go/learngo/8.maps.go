package main

import "fmt"

/**
Map的定义
- map[K]V, map[K1]map[K2]V
Map的操作
- 创建：make(map[string]int)
- 获取元素： m[key]
- key不存在时，获得Value类型的初始值
- 用value,ok:=m[key]来判断是否存在key
- 用delete删除一个key
Map的遍历
- 使用range遍历key，或者遍历key,value对
- 不保证遍历顺序，如需顺序，需手动对key排序
- 使用len获得元素个数
map的key
- map使用哈希表，必须可以比较相等
- 除了slice，map，function的内建类型都可以作为key
- Struct类型不包含上述字段，也可作为key
*/
func main() {
	m := map[string]string{
		"name":   "ccmouse",
		"course": "golang",
	}
	fmt.Println(m) // map[course:golang name:ccmouse]

	// 空map
	m2 := make(map[string]int) // m2 == empty map
	var m3 map[string]int      // m3 == nil
	fmt.Println(m2)            // map[]
	fmt.Println(m3)            // map[]
	// 遍历 map
	for k, v := range m {
		fmt.Println(k, v) // map是无序的
	}
	for _, v := range m {
		fmt.Println(v)
	}
	// 获取值 getting values
	courseName, ok := m["course"]
	fmt.Println(courseName, ok) // golang true
	xxx, ok := m["couse"]
	fmt.Println(xxx, ok) // false

	if yyy, ok := m["xxx"]; ok {
		fmt.Println(yyy)
	} else {
		fmt.Println("keys does not exist") // keys does not exist
	}

	// 删除值 deleting values
	name, ok := m["name"]
	fmt.Println(name, ok) // ccmouse true

	delete(m, "name")
	name, ok = m["name"]
	fmt.Println(name, ok) // false

	// 例：寻找最长不含有重复字符的子串
}
