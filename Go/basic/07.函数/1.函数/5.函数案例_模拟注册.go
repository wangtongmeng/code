package main

import "fmt"

func main() {
	/*
	模拟用户注册，当用户输入完用户名，密码和邮箱后，进行校验。如果发现
	用户名，密码和邮箱是空的，则给出“信息不能为空，用户注册失败”的提示，否则，进行邮
	件发送，并给出“用户注册成功”的提示。
	 */
	//1:用户注册
	// 2: 校验信息
	// 3: 发送邮件
	Register()
}

//1:用户注册
func Register() {
	// 1: 接收用户输入的信息
	var userName string = ""
	var userPwd string = "123"
	var userEmail string = "itcast@126.com"
	// 2: 进行校验
	b := CheckInfo(userName, userPwd, userEmail)
	// 3: 校验结果成了，调用发送邮件的函数
	if b {
		SendEmail()
		fmt.Println("用户注册成功了！！")
	}else {
		fmt.Println("信息不完整，无法完成用户注册！！")
	}
}

// 2: 校验信息
func CheckInfo(name string, pwd string, email string) bool {
	if name != "" && pwd != "" && email != "" {
		return true
	} else {
		return false
	}
}

// 3: 发送邮件
func SendEmail() {
  fmt.Println("邮件发送成功！！")
}
