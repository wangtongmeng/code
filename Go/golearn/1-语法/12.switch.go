package main

import "fmt"

func main() {

	score := 60
	switch {
	case score < 60:
		fmt.Println("不及格")
	case score >= 60 && score < 70:
		fmt.Println("及格")
	case score >= 70 && score < 80:
		fmt.Println("优秀")
	case score >= 80 && score < 100:
		fmt.Println("卓越")
	}

	var grade = "B"
	var marks int = 90

	switch marks {
	case 90:
		grade = "A"
	case 80:
		grade = "B"
	case 50, 60, 70:
		grade = "C"
	default:
		grade = "D"
	}
	fmt.Println(grade)
}
