package main

import "fmt"

func main()  {
	// 一: 求1-100之间所有数字之和。
		// 1,2,3,4,5,6,7,8...100
		// 1+2 = 3
		// 3+3 = 6
		// 6+4 = 10
		// 10 +5 =15
		// 1：确定循环的条件
		/*
		var i int
		var sum int
	for i = 1; i <= 100 ; i++ {
		sum = sum + i
	}
	fmt.Println(sum)
		// 2: 完成数字累加
		// 3； 打印输出结果

		*/


	// 二: 求1—100之间的偶数之和
	// 1: 确定循环的条件
	var sum int
	/*
	for i := 1; i <= 100 ; i++  {
		if i%2 == 0 {
			sum = sum + i
		}
	}
	*/
	for i:=2 ; i<= 100 ; i += 2  {
		sum = sum + i
	}

	fmt.Println(sum)
	// 2: 判断数字是否为偶数
	// 3: 是偶数进行累加运算
	// 4: 打印输出结果



}
