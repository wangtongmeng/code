package main

import "fmt"

type Person struct {
	name string
}

// 接收器命名规范，单词首字母的小写，例如 p *Person  pn *PersonName
func changeName(p *Person) {
	p.name = "wangwu"
}

func swap(a, b *int) {
	//a, b = b, a // 无效

	// 临时值
	t := *a
	// 将a地址的值改为b指向的值
	*a = *b
	// 将b地址的值改为临时值
	*b = t
}

func main() {
	/**
	go限制了指针的运算，在c语言中你拿到了一个指针之后可以进行+1，在go中不行，不能参加运算
	go的指针是一个阉割版，如果要参加运算，用unsafe包
	*/
	p := Person{
		name: "lisi",
	}
	fmt.Printf("%p\r\n", &p) // 0x45ce44d24010
	changeName(&p)           // 传递指针
	fmt.Println(p.name)      // wangwu

	// 指针的定义
	//var po *Person // 定义一个指针指向Person的地址
	po := &Person{
		name: "lisi",
	}
	fmt.Printf("%p\r\n", &po) // 0x5c70fd182040
	(*po).name = "lisi1"
	fmt.Println(po.name) // lisi1
	po.name = "lisi2"
	fmt.Println(po.name) // lisi2

	/*指针初始化*/
	// 初始化两个关键字
	//	map、channel、slice初始化推荐使用make方法
	//  指针初始化推荐使用new函数，指针要初始化，否则会出现nil pointer
	//	map 必须初始化
	// 方式1
	ps := &Person{} // 需要初始化值{}
	fmt.Println(ps.name)
	// 方式2
	var emptyPerson Person
	p1 := &emptyPerson
	fmt.Println(p1.name)
	// 方式3
	var pp = new(Person) // new就给值和指针都开辟好空间，让指针指向值
	fmt.Println(pp.name)

	a, b := 1, 2
	swap(&a, &b)
	fmt.Println(a, b) // 2 1
}
