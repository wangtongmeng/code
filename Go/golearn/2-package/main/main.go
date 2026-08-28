package main

import (
	"fmt"
	"golearn/package/user"
	//u1 "golearn/2-package/user" // 使用别名
	//. "golearn/2-package/user" // 尽量少用，不然 Course 不知道是哪个包里的
	_ "golearn/2-package/user1" // 导入包但不使用，执行 init 函数
) // 使用双引号

func main() {
	c := user.Course{ // 使用实际的包名 course -> user
		Name: "go", // 字段名大写才能导出
	}
	fmt.Println(c.GetCourse())
}
