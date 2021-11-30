package main

import "fmt"

/**
问题1：某商店T恤的价格为35元/件，裤子的价格为120元/条。
小明在该店买了3件T恤和2条裤子，且打8.8折。请计算并显示小明应该付多少钱？
问题2：如提上中打完8.8折后出现小数，商店为了结算方便，
只收取用户整数部分的钱，如本应收用户303.6，现在只收用户303元，应如何做？
 */
func main() {
	var shirt int = 35
	var trousers int = 120
	totalMoney := shirt*3+trousers*2
	realMoney := float64(totalMoney)*0.88
	fmt.Printf("支付%.2f\n", realMoney) // 303.60
	fmt.Printf("支付：%d", int(realMoney)) // 303
}