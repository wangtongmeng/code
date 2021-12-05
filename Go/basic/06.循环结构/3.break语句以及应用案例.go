package main

import "fmt"

func main()  {
	/*
	for i:=0; i<10; i++ {
		if i==3 {
			break // 结束当前循环，后面的代码不会在执行。
		}
		fmt.Println(i)
	}
	*/
	// 要求用户输入用户名和密码，只要不是admin、888888就一直提示用户名,密码错误,请重新输入。
	// 1: 定义变量存储用户名和密码
	var userName string // 存储用户名
	var userPwd string // 存储密码
	var count int // 记录的输入错误的次数
	for  {
		fmt.Println("请输入用户名:")
		fmt.Scan(&userName)
		fmt.Println("请输入密码:")
		fmt.Scan(&userPwd)
		// 2: 对输入的用户名密码进行判断。
		if userName=="admin" && userPwd=="888888"{
			fmt.Println("输入的用户名密码正确")
			break

		} else {
			count++
			if count>=3{
				fmt.Println("最多输错3次")
				break
			}
			fmt.Println("输入的用户名密码错误，请重新输入")
		}
	}

	// 3: 如果不正确，给出重新输入的提示，如果正确，给出的正确的提示

}
