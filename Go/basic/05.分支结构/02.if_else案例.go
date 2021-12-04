package main

import "fmt"

func main() {
	// 输入一个数字，判断是否为偶数，如果是输出“该数是偶数”，否则输出“该数是奇数”
	//var num int
	//fmt.Println("请输入一个数字")
	//fmt.Scan(&num)
	//if (num%2==0){
	//	fmt.Println("输入的数字为偶数")
	//} else {
	//	fmt.Println("输入的数字为奇数")
	//}


	// 输入公交卡当前的余额，只要超过2元，就可以上公交车；上车以后如果空座位的数量大于0，就可以做下。
	var money float64
	fmt.Println("请输入钱数")
	fmt.Scan(&money)
	if money > 2 {
		var count int
		fmt.Println("请输入座位数: ")
		fmt.Scan(&count)
		if count > 0 {
			fmt.Println("你可以坐下")
		} else {
			fmt.Println("你只能站着")
		}

	} else {
		fmt.Println("不能上车")
	}



}
