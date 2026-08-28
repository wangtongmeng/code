package main

import (
	"fmt"
	"time"
)

// 默认情况下，channel是双向的
// 但是，我们经常一个channel作为参数传递时，只需要单向的channel

func producer(out chan<- int) {
	for i := 0; i < 10; i++ {
		out <- i * i
	}
	close(out)
}

func consumer(in <-chan int) {
	for num := range in {
		fmt.Printf("%d ", num)
	}
}

func main() {
	//var ch1 chan int       // 双向
	//var ch2 chan<- float64 // 单向，只能写入float64
	//var ch3 <-chan int

	//c := make(chan int, 3)
	//var send chan<- int = c // 只能写入
	//var read <-chan int = c // 只能读取
	//
	//send <- 1
	//<-read

	c := make(chan int)
	go producer(c)
	go consumer(c)
	time.Sleep(10 * time.Second)

}
