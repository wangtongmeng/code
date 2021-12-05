package main

import "fmt"

func main()  {
	// 2006年营业额80000元，每年增长25%，请问按此增长速度，到哪一年营业额将达到20万元

	 var year int = 2006
	 var money float64
	 for money = 80000; money <= 200000; money = money * 1.25 {
		 year += 1
	 }
	 fmt.Println(year)


}
