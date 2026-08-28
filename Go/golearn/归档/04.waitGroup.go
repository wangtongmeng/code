package main

import (
	"fmt"
	"sync"
)

// 主goroutine用定时器无法控制子goroutine的退出，所以使用waitGroup
// waitGroup，主要用于goroutine的执行等待，Add方法要和Done方法配合使用。为了防止忘记调用Done方法，可以使用defer语句
// 子goroutine如何通知主goroutine自己结束了，主goroutine如何知道子goroutine的结束了
func main() {
	var wg sync.WaitGroup

	// 我要监控多少个goroutine执行结束
	wg.Add(10)
	for i := 0; i < 10; i++ {
		//go func(i int) {
		//	fmt.Println(i)
		//	wg.Done() // wg数量减1
		//}(i)

		go func(i int) {
			defer wg.Done() // 确保Done方法一定会被调用
			fmt.Println(i)
		}(i)
	}

	wg.Wait() // 阻塞，直到wg数量为0
	fmt.Println("主goroutine结束")
}

/**
输出：

0
9
5
6
8
2
1
3
4
7
主goroutine结束


*/
