package main

import "fmt"

/*
PrintIn()
Print()
Printf()
*/
func main() {
	// 输出
/*	num1:=10
	num2:=20
	num3:=30
	fmt.Println(num1,num2,num3) // 10 20 30 不能区分来源
	fmt.Printf("%d\n", num1) // 10 %d标识输出的是整形变量中的值，格式符 \n 标识换行
	fmt.Print("num2=", num2) // num2=20

	// 多个值输出
	fmt.Println("num1 = ", num1, ", num2= ", num2, ",num3 = ", num3)
	fmt.Printf("num1 = %d, num2 = %d, num3= %d",num1,num2,num3) // 多个变量输出时，Printf清晰
	//num1 =  10 , num2=  20 ,num3 =  30
	//num1 = 10, num2 = 20, num3= 30*/

	// 输入
	//Scanf()
	//Scan() 简洁
	var age int
	fmt.Println("请输入年龄：")

	/*fmt.Scanf("%d",&age) // 通过Scanf函数将键盘输入的数据赋值给变量，但是变量前要加&
	fmt.Println("age = ", age) // 控制台输入18，打印出 age =  18
	fmt.Println(&age) // 0xc000014098 查看变量的内存地址
	fmt.Printf("%p", &age) // 输入17 控制台打印 0xc000014098*/
	fmt.Scan(&age)
	fmt.Println(age, &age) // 输入10 控制台打印 10 0xc000014098
}
