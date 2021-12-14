package main

import "fmt"

func main() {
	// 从一个整数数组中取出最大的整数,最小整数,并且求总和,求平均值。
	// 1:定义数组
	var nums [5]int = [5]int{3, 6, 7, 8, 9}
	// 2:定义两个变量存储最大的值和最小的值。
	var max int = nums[0]
	var min int = nums[0]
	var sum int
	// 3: 循数组和最大值与最小值进行比较。
	for i := 0; i < len(nums); i++ {
		if nums[i] > max {
			max = nums[i]
		}
		if nums[i] < min {
			min = nums[i]
		}
		sum = sum + nums[i]
	}
	fmt.Println("最大值为", max)
	fmt.Println("最小值为", min)
	fmt.Println("和为", sum)
	fmt.Printf("平均值为；%.2f", float64(sum)/5)

}
