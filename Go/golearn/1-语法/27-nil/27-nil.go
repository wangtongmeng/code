package main

type Person struct {
	name string
	age  int
}

func main() {
	/**
	零值
	bool      false
	numbers     0
	string     ""
	pointer    nil
	slice      nil
	map        nil
	channel、interface、function nil

	struct 默认值不是nil、默认值是具体字段的默认值
	*/

	p1 := Person{
		name: "Bob",
		age:  23,
	}
	p2 := Person{
		name: "Bob",
		age:  23,
	}

	if p1 == p2 {
		println("yes") // true
	}

	// slice
	var ps []Person             // nil的slice
	var ps2 = make([]Person, 0) // empty的slice
	if ps == nil {
		println("ps is nil") // ps is nil
	}
	if ps2 != nil {
		println("ps2 is not nil") // ps2 is not nil
	}

	// map
	var m map[string]Person
	var m2 = make(map[string]Person, 0)
	if m == nil {
		println("m is nil") // m is nil
	}
	if m2 != nil {
		println("m2 is not nil") // m2 is not nil
	}
}
