package main

import "fmt"

func main()  {
	// 用continue实现：输出1-5个数字，除了数字3以外。
	/*
	for i := 1; i <= 5 ; i++  {
		if i == 3 {
			continue
		}
		fmt.Println(i)
	}
	*/

 	// 用continue实现：计算1到100(含)之间的除了能被7整除之外所有整数的和。
 	var sum int
 	for i := 1; i <= 100 ; i++ {
 		if i % 7 == 0 {
			continue
		}
		sum += i
	}
	fmt.Println(sum)

}
