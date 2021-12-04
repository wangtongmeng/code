package main

import "fmt"

func main() {
	/**
	提示用户输入用户名密码，如果输入admin/88888提示正确；否则提示对应错误
	 */
	 var userName string
	 var userPwd string
	 fmt.Println("请输入用户名：")
	 fmt.Scan(&userName)
	 fmt.Println("请输入密码：")
	 fmt.Scan(&userPwd)
	 if userName == "admin" && userPwd == "88888" {
		 fmt.Println("可以登录系统")
	 } else if userName == "admin" {
		 fmt.Println("密码输入错误")
	 } else if userPwd == "88888" {
		 fmt.Println("用户名错误")
	 } else {
		 fmt.Println("用户名和密码都输入错误")
	 }



}
