package main

import "time"

func g1(ch chan struct{}) {
	time.Sleep(2 * time.Second)
	ch <- struct{}{}
}

func g2(ch chan struct{}) {
	time.Sleep(1 * time.Second)
	ch <- struct{}{}
}

// select主要作用于多个channel
func main() {
	g1Channel := make(chan struct{}, 1) // channel是多线程安全的，channel要初始化
	g2Channel := make(chan struct{}, 2)
	go g1(g1Channel)
	go g2(g2Channel)

	// 5秒超时
	timer := time.NewTimer(5 * time.Second)
	//某个分支就绪了就执行该分支，如果两个都就绪了，随机执行，防止饥饿
	for {
		select {
		case <-g1Channel:
			println("g1 done")
		case <-g2Channel:
			println("g2 done")
		case <-timer.C:
			println("timeout")
			return
		}
	}
}
