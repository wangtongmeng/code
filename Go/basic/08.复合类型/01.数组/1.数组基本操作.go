package main

import "fmt"

func main() {
	/*
	var Numbers[5] int = [5]int{1,2,3,4,5} // 下标是从0开始计算的。
	fmt.Println(Numbers[3])
	*/
	//  部分赋值
	/*
	Numbers := [5]int{1,2}
	fmt.Println(Numbers[4])
	*/
	// 指定某个元素初始化
	/*
	Numbers :=[5]int{2:5,3:6}
	fmt.Println(Numbers[3])
	*/
	//通过初始化确定数组长度
	/*
	Numbers :=[...]int{7,8,5}
	//fmt.Println(len(Numbers))
	fmt.Println(Numbers[0])
	*/
	var Numbers [5] int
	/*
	Numbers[0]=1
	Numbers[1]=2
	fmt.Println(Numbers[3])
	*/
	for i := 0; i < len(Numbers); i++ {
		Numbers[i] = i + 1
	}
	fmt.Println(Numbers[0])

}
