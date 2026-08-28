package main

import (
	"fmt"
	"sync"
)

// 多个goroutine修改共享变量，使用互斥锁
// 锁 - 解决资源竞争问题

var total int
var wg sync.WaitGroup

func add() {
	defer wg.Done()
	for i := 0; i < 100000; i++ {
		total += 1
	}
}
func sub() {
	defer wg.Done()
	for i := 0; i < 100000; i++ {
		total -= 1
	}
}
func main() {
	wg.Add(2)
	go add()
	go sub()
	wg.Wait()
	fmt.Println(total)
}

/**
输出：
多次运行值不一样
91903
70756
如果i是10，结果都是0，但是i是100000，结果就不一样了，因为发生了资源竞争
因为1.加载a 2.修改a 3.存储a，这个过程不是原子操作

为什么10没问题，因为10个add操作非常 快，还没等sub操作开始，add操作已经完成了
*/
