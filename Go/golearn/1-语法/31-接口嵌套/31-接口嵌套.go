package main

import "fmt"

type MyWriter interface {
	Write(string)
}

type MyReader interface {
	Read() string
}

// 继承
type MyReadWriter interface {
	MyReader
	MyWriter
	ReadWrite() // 自己的方法
}

type SreadWriter struct {
}

func (s *SreadWriter) Read() string {
	//TODO implement me
	fmt.Println("read")
	return ""
}

func (s *SreadWriter) Write(s2 string) {
	//TODO implement me
	fmt.Println("write")
}

func (s *SreadWriter) ReadWrite() {
	//TODO implement me
	fmt.Println("read write")
}

func main() {
	// &SreadWriter 对应方法接收器 *SreadWriter
	var mrw MyReadWriter = &SreadWriter{}
	mrw.Read()
	mrw.Write("123")
	mrw.ReadWrite()
}
