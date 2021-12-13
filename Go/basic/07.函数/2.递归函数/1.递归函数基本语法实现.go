package main

import "fmt"

func main() {
   c:=Test(3)
   fmt.Println(c)
}
func Test(n int) int {
	// 只有第一排的人才知道自己的排数
	if n == 1{
		return 1
	}
	// 如果不是第一排，问一下前一排的人
	r := Test(n-1)
	fmt.Println("前一排的排数：",r)
	// 把前一排人的排数+1，计算出自己的排数。
	return r+1
}
