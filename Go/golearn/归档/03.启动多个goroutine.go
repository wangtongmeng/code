package main

import (
	"fmt"
	"time"
)

//func main() {
//	// id 重用问题？
//	// 1.闭包
//	// 2.for循环问题：for循环是并发执行的，而for循环中的变量是重用的
//	for i := 0; i < 100; i++ {
//		go func() {
//			fmt.Println(i)
//		}()
//	}
//	fmt.Println("main goroutine")
//	time.Sleep(10 * time.Second) // 10秒后退出
//}

// 启动多个goroutine
func main() {
	for i := 0; i < 100; i++ {
		//// 方法 tmp := i
		//go func() {
		//	fmt.Println(tmp)
		//}()

		go func(i int) {
			fmt.Println(i)
		}(i) // 值传递，i的值会复制一份
	}
	fmt.Println("main goroutine")
	time.Sleep(10 * time.Second) // 10秒后退出
}

/**
输出：
4
0
5
main goroutine
7
99
53
54
8
55
56
9
57
10
58
59
11
60
12
61
13
62
63
14
64
15
65
66
67
68
16
69
17
70
18
19
71
20
72
21
22
73
74
23
24
75
25
76
26
77
27
78
28
79
80
81
29
82
30
83
31
84
32
33
34
35
36
37
85
38
86
39
87
40
88
41
89
90
91
92
42
93
43
94
44
95
45
96
46
97
47
98
48
51
49
50
52
2
3
1
6

*/
