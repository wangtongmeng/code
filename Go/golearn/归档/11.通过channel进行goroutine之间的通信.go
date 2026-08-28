package main

import (
	"fmt"
	"time"
)

// goroutine通信
// 不要通过共享内存来通信，而是通过通信来实现内存共享
func main() {
	//var msg chan string
	//msg = make(chan string, 1)
	//msg <- "hello"     // 往channel中存值
	//fmt.Println(<-msg) // 从channel中取值

	//// 无缓冲channel， channel的初始化值，如果是0的话，放值会阻塞
	//var msg chan string
	//msg = make(chan string, 0)
	//msg <- "hello"
	//data := <-msg
	//fmt.Println(data)
	//// fatal error: all goroutines are asleep - deadlock!

	// 使用无缓冲channel，需要开一个goroutine
	var msg chan string
	msg = make(chan string, 0)
	go func(msg chan string) {
		data := <-msg // go有一种happen-before机制，可以保障 data := <-msg 先于 msg <- "hello"执行，保证能接收到信息
		fmt.Println(data)
	}(msg)
	msg <- "hello"
	time.Sleep(time.Second * 10)
}
