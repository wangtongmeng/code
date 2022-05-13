/**
- 数量写在类型前
数组的遍历
- 可通过 _ 省略变量
- 不仅 range，任何地方都可通过_省略变量
- 如果只要i， 可写成 for i: = range numbers
为什么要用range
- 意义明确，美观
- c++: 没有类似能力
- Java/Python: 只能for each value，不能同时获取i,v
数组是值类型（拷贝）
- [10]int 和 [20]int 是不同类型
- 调用func f(arr [10]int) 会**拷贝**数组
- 在go语言中一般不直接使用数组
 */
package main

import "fmt"

func printArray(arr [5]int) {
	arr[0] = 100
	 for i, v := range arr {
	 	fmt.Println(i, v)
	 }

}
func printArray1(arr *[5]int) {
	arr[0] = 100
	for i, v := range arr {
		fmt.Println(i, v)
	}

}

func main() {
	// 声明定义数组
	var arr1 [5]int
	arr2 := [3]int{1, 3, 5}
	arr3 := [...]int{2, 4, 6, 8, 10}
	var grid [4][5]int // 4行5列 4个常用为5的int数组
	fmt.Println(arr1, arr2, arr3)
	fmt.Println(grid)
	// 遍历数组
	//for i :=0; i < len(arr3); i++ {
	//	fmt.Println(arr3[i])
	//}
	for i, v := range arr3 { // 使用range关键字遍历 不想要可用用_占位
		fmt.Println(i, v)
	}

	printArray(arr1)
	printArray(arr3)
	fmt.Println(arr1, arr3)

	printArray1(&arr1)
	printArray1(&arr3)
	fmt.Println(arr1, arr3)
}
