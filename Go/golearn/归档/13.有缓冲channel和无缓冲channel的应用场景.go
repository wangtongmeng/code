package main

import (
	"fmt"
	"time"
)

/*
 */
func main() {
	var msg chan int
	msg = make(chan int, 2)
	go func(msg chan int) {
		for data := range msg { // 2.关闭channel后，for range自动退出，不会阻塞代码了，继续往下走
			fmt.Println(data)
		}
		fmt.Println("接收退出") // 3.关闭channel后，前面不阻塞了，走到这里了
	}(msg)

	msg <- 1
	msg <- 2
	close(msg) // 1.关闭channel

	// 已经关闭的channel可以继续取值，但不能继续放值，会panic
	d := <-msg
	fmt.Println(d) // 没有panic
	//msg <- 3   // panic: send on closed channel 已经关闭的channel不能再放值了
	time.Sleep(10 * time.Second)
}
