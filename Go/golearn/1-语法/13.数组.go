package main

import "fmt"

func main() {
	// go语言提供了哪些类型的数据结构，数组、切片(slice)、map、list  slice/map最常用

	// 数组
	var names1 [3]string
	var names2 [4]string
	fmt.Printf("%T\r\n", names1) // [3]string
	fmt.Printf("%T\r\n", names2) //  [4]string
	// 类型不同

	names1[0] = "A"
	names1[1] = "B"
	names1[2] = "C"

	// 遍历
	for _, value := range names1 {
		fmt.Println(value)
	}

	for i := 0; i < len(names1); i++ {
		fmt.Print(names1[i] + " ")
	}

	// 数组初始化
	// 初始化方式1
	names3 := [3]string{"A", "B", "C"}
	for _, value := range names3 {
		fmt.Print(value + " ")
	}
	// A B C
	// 初始化方式2
	names4 := [3]string{2: "B"}
	for _, value := range names4 {
		fmt.Print(value + " ")
	}
	//   B
	// 初始化方式3
	names5 := [...]string{"A", "B", "C"}
	names6 := [...]string{"A", "B"}
	fmt.Println(len(names5), len(names6)) // 3 2

	// 相等判断
	fmt.Println([...]string{"a", "b"} == [...]string{"a", "b"}) // true

	// 多维数组
	var aa [3][4]string
	aa[0] = [4]string{"a0", "a1", "a2", "a3"}
	aa[1] = [4]string{"b0", "b1", "b2", "b3"}
	aa[2] = [4]string{"c0", "c1", "c2", "c3"}
	fmt.Println(len(aa)) // 3
	for i := 0; i < len(aa); i++ {
		for j := 0; j < len(aa[i]); j++ {
			fmt.Print(aa[i][j] + " ")
		}
		fmt.Println()
	}
	for _, row := range aa {
		for _, col := range row {
			fmt.Print(col + " ")
		}
		fmt.Println()
	}
}
