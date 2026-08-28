package main

import (
	"errors"
	"fmt"
)

func A() (int, error) {
	return 0, errors.New("this is an error")
}
func B() (int, error) {
	panic("this is a panic") // 主动panic，业务代码中不应该写
	return 0, errors.New("this is an error")
}

func C() (int, error) {
	var names map[string]string // panic: assignment to entry in nil map
	names["go"] = "go"
	return 0, errors.New("this is an error")
}

func D() (int, error) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("recoverd if D", r) // recoverd if D assignment to entry in nil map
		}
	}()
	var names map[string]string
	names["go"] = "go"
	return 0, errors.New("this is an error")
}
func main() {
	//error，panic，recover
	// go语言错误处理的理念，一个函数可能出错， try catch包住函数
	// 函数需要有一个返回值告诉调用者是否成功，go设计者要求我们必须要处理这个err，所以代码中大量出现 if err != nil，防御编程

	/**
	1.defer需要放在panic之前定义，另外 recover 只有在 defer 调用的函数中才生效
	2.recover 处理异常后，逻辑并不会恢复到panic的那个点去
	3.多个defer会形成栈，后定义的defer会先执行
	*/

	// error
	if _, err := A(); err != nil {
		fmt.Println(err) // this is an error
	}

	// panic 这个函数会导致程序退出，不推荐随便使用panic
	// 一般用在服务初始化启动时，例如依赖服务、日志文件存在、mysql连接、配置文件都没问题才启动，否则主动调用panic退出程序
	// 主动调panic
	//if _, err := B(); err != nil {
	//	fmt.Println(err)
	//}
	// 被动触发panic
	//if _, err := C(); err != nil {
	//	fmt.Println(err)
	//}

	// recover 能捕获到panic
	if _, err := D(); err != nil {
		fmt.Println(err)
	}

}
