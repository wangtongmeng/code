package main

import (
	"fmt"
	"time"
)

var number, letter = make(chan bool), make(chan bool)

func printNum() {
	i := 1
	for {
		<-number
		fmt.Printf("%d%d", i, i+1)
		i += 2
		letter <- true
	}
}
func printLetter() {
	i := 0
	str := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	for {
		<-letter
		if i >= len(str) {
			return
		}
		fmt.Print(str[i : i+2])
		i += 2
		number <- true
	}
}

func main() {
	/**
	使用两个goroutine交替打印序列，一个打印数字，一个打印字母，最终效果如下：
	12AB34CD56EF78GH
	*/

	go printNum()
	go printLetter()
	number <- true

	time.Sleep(time.Second * 100)
}
