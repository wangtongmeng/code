package main

import "fmt"

/**
Slice（切片）
arr := [...]int{0,1,2,3,4,5,6,7}
s := arr[2:6]

s[0] = 10
- Slice本身没有数据，是对底层array的一个view
- arr的值变为...

Reslice
	s := arr[2:6]
	s = s[:3]
	s = s[1:]
	s = arr[:]
Slice的扩展
	arr := [...]int{0,1,2,3,4,5,6,7}
	s1 := arr[2:6]
	s2 := s1[3:5]
- s1的值为[2,3,4,5]，s2的值为[5,6]
- slice可以向后扩展，不可以向前扩展
- s[i] 不可以超越len(s)，向后扩展不可以超越底层数组cap(s)

向Slice添加元素
- 添加元素时如果超越cap，系统会重新分配更大的底层数组
- 由于值传递的关系，必须接收append的返回值
- s = append(s, val)
*/
func updateSlice(s []int) {
	s[0] = 100
}

func printArray2(arr []int) {
	arr[0] = 100
	for i, v := range arr {
		fmt.Println(i, v)
	}

}

func addSlice() {
	arr := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
	s1 := arr[2:6]
	s2 := s1[3:5]
	s3 := append(s2, 10)
	s4 := append(s3, 11)
	s5 := append(s4, 12)
	fmt.Println(arr, s3, s4, s5) // [0 1 2 3 4 5 6 10] [5 6 10] [5 6 10 11] [5 6 10 11 12]
	// append 10 后，arr最后一位变了
	// s4 and s5 no longer view arr
}

func main() {
	arr := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
	fmt.Println("arr[2:6]", arr[2:6]) // [2 3 4 5] 左闭右开
	fmt.Println("arr[:6]", arr[:6])   // [0 1 2 3 4 5] 从头开始到6的开区间
	fmt.Println("arr[2:]", arr[2:])   // [2 3 4 5 6 7] 2的闭区间到头
	fmt.Println("arr[:]", arr[:])     // [0 1 2 3 4 5 6 7] 全部

	s1 := arr[2:] // [2 3 4 5 6 7]
	fmt.Println("s1 = ", s1)
	fmt.Println("after updateSlice(s1)")
	updateSlice(s1)
	fmt.Println("s1 = ", s1)   // [100 3 4 5 6 7] 改变了
	fmt.Println("arr = ", arr) // [0 1 100 3 4 5 6 7]

	s2 := arr[:] // [0 1 100 3 4 5 6 7]
	fmt.Println("s2 = ", s2)
	fmt.Println("after updateSlice(s2)")
	updateSlice(s2)
	fmt.Println("s2 = ", s2)   //[100 1 100 3 4 5 6 7] 改变了
	fmt.Println("arr = ", arr) // [100 1 100 3 4 5 6 7]

	arr2 := [3]int{1, 3, 5}
	printArray2(arr2[:])
	fmt.Println(arr2) // [100 3 5] 变了

	fmt.Println("Reslice")
	fmt.Println(s2)
	s2 = s2[:5]     // 取前5个
	fmt.Println(s2) // [100 1 100 3 4]
	s2 = s2[2:]     // 从第2个取
	fmt.Println(s2) // [100 3 4]

	fmt.Println("extend Slice")
	s11 := arr[2:6]
	s22 := s1[3:5]
	fmt.Println(s11, s22) //  [100 3 4 5] [5 6]

	fmt.Printf("s1=%v, len(s1)=%d, cap(s1)=%d\n", s11, len(s11), cap(s11)) // s1=[100 3 4 5], len(s1)=4, cap(s1)=6
	fmt.Printf("s2=%v, len(s2)=%d, cap(s2)=%d\n", s22, len(s22), cap(s22)) // s2=[5 6], len(s2)=2, cap(s2)=3

	addSlice()
}
