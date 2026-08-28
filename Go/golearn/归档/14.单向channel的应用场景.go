package main

import (
	"fmt"
	"time"
)

/*
单向channel的应用场景
默认情况下，channel是双向的
但是，我们经常一个channel作为参数进行传递，希望对方是单向使用
*/

func producer(out chan<- int) {
	for i := 0; i < 10; i++ {
		out <- i * i
	}
	close(out) // 关闭了还可以取值，但不能放值
}

func consumer(in <-chan int) {
	for num := range in {
		fmt.Printf("num=%d\n", num)
	}
}

func main() {
	// 基本声明和概念
	//var ch1 chan int       // 双向channel
	//var ch2 chan<- float64 // 单向channel，只能写入float64数据
	//var ch3 <-chan int     // 单向channel，只能读取
	//
	//c := make(chan int, 3)
	//var send chan<- int = c // send-only 只能放
	//var read <-chan int = c // recv-only 只能取
	//
	//send <- 1
	////<-send // 无效运算: <-send (从仅发送类型 chan<- int 接收)
	//<-read

	c := make(chan int)
	go producer(c)
	go consumer(c)
	time.Sleep(10 * time.Second)
	/*
		num=0
		num=1
		num=4
		num=9
		num=16
		num=25
		num=36
		num=49
		num=64
		num=81
	*/

}
