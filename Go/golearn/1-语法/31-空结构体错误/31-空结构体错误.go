package main

import "fmt"

func mPrint(datas ...interface{}) {
	for _, value := range datas {
		fmt.Println(value)
	}
}

type myinfo struct{}

func (mi *myinfo) Error() string {
	return "自定义错误"
}

func main() {
	var data = []interface{}{
		"lisi", 123,
	}
	mPrint(data...)

	//var datai = []interface{}
	//for _, value := range data {
	//	datai = append(datai, value)
	//}
	//var data2 = []string{"wangwu", "zhaoliu"}
	//mPrint(data2...) // 无法将 'data2' (类型 [] string) 用作类型 [] interface{}interface

	//mPrint(datai...)

	var err error = &myinfo{}

	fmt.Println(err)
}
