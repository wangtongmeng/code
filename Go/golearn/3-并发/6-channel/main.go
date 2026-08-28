package main

import "fmt"

/**
channel 协程间通信
不要通过共享内存来通信，而要通过通信来共享内存
php、python java等语言 在多线程编程时，都是通过共享内存来通信的，也就是通过变量来通信的；也提供消息队列来实现通信，例如java的BlockingQueue，python的queue
go语言中，通过channel来通信，channel是类型相关的数据通道，通过它可以实现多个goroutine之间的通信，channel本质上是一个先进先出的队列

无缓冲channel：适用场景，B要等A执行完，A执行完通知B
有缓冲channel：适用场景，消费者和生产者之间的通信
go中channel的应用场景：
1. 消息传递、消息过滤
2. 信号广播
3.事件订阅和广播
4.任务分发
5.结果汇总
6.并发控制
7.同步和异步
...
*/

func main() {
	var msg chan string
	msg = make(chan string, 1) // 1表示channel的容量为1

	msg <- "hello" // 放入数据到channel
	data := <-msg  // 从channel取出数据
	fmt.Println(data)

	// 无缓冲channel需要用goroutine来接收数据，否则会阻塞
	var msg2 chan string
	msg2 = make(chan string) // 无缓冲channel
	go func(msg2 chan string) {
		data2 := <-msg2
		fmt.Println(data2)
	}(msg2)
	msg2 <- "hello1"
}
