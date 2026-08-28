package main

import (
	"fmt"
	"time"
)

// 已经关闭的channel可以继续取值，但是不能再放入数据(panic: send on closed channel)

func main() {
	var msg chan string
	msg = make(chan string, 2)

	msg <- "1"
	msg <- "2"

	go func(msg chan string) {
		for data := range msg {
			fmt.Println(data)
		}
		fmt.Println("over")
		close(msg)

	}(msg)

	time.Sleep(time.Second * 2)

}
