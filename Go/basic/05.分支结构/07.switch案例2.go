package main

import "fmt"

func main() {
	/**
	李四的年终工作评定，如果定位A级，则工资涨500元，如果定位为B级，则工资涨200元，
	如果定位C级，工资不变，如果定为D级工资将200元，如果定为E级工资将降500元。
	设李四的原工资为5000，请用户输入李四的评级，然后显示李四来年的工资。
	 */
	var level string
	var salary int = 5000
	var b bool = true
	fmt.Println("请输入评级信息：")
	fmt.Scan(&level)
	//if level == "A" {
	//	salary += 500
	//} else if level == "B" {
	//	salary += 200
	//} else if level == "C" {
	//
	//} else if level == "D" {
	//	salary -= 200
	//} else if level == "E" {
	//	salary -= 500
	//} else {
	//	fmt.Println("出错了")
	//	b = false
	//}
	// switch方案
	switch level {
	case "A":
			salary += 500
	case "B":
		salary += 200
	case "C":
	case "D":
		salary -= 200
	case "E":
		salary -= 500
	default:
		fmt.Println("输入错误")
	}
	if b {
		fmt.Println("工资是", salary)
	}

}
