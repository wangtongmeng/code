package main

var s int = 1
func main() {

TestDemo(5)
}
func TestDemo(n int)  {
	if n == 1{
		return
	}
	s*=n
	TestDemo(n-1)
}