package main

import "fmt"

type MyWriter interface {
	Write(string) error
}

type MyCloser interface {
	Close() error
}

type writerCloser struct {
	MyWriter // interface 也是一个类型
}

func (wc *writerCloser) Write(string) error {
	fmt.Println("write")
	return nil
}
func (wc *writerCloser) Close() error {
	fmt.Println("close")
	return nil
}

type fileWriter struct {
	filePath string
}

func (fw *fileWriter) Write(string) error {
	fmt.Println("write")
	return nil
}

type databaseWriter struct {
	host string
	port int
	db   string
}

func (dw *databaseWriter) Write(string) error {
	fmt.Println("write")
	return nil
}

func main() {
	//var mw MyWriter = &writerCloser{}
	//var mc MyCloser = &writerCloser{}

	var mw1 MyWriter = &writerCloser{
		&fileWriter{},
	}
	mw1.Write("xxx")
}
