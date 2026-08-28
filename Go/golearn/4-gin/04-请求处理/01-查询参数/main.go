package main

import (
	"github.com/gin-gonic/gin"
)

// 访问 http://localhost:8080/?name=lisi&age=18

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		// 获取查询参数
		name := c.Query("name")
		age := c.DefaultQuery("age", "25")
		c.JSON(200, gin.H{
			"message": "Hello World!",
			"name":    name,
			"age":     age,
			"status":  "success",
		})
	})

	r.Run() // listens on 0.0.0.0:8080 by default
}
