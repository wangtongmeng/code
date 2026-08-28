package main

//import (
//	"log"
//	"net/http"
//
//	"github.com/gin-gonic/gin"
//)
//
//func main() {
//	// Create a Gin router with default middleware (logger and recovery)
//	r := gin.Default()
//
//	// Define a simple GET endpoint
//	r.GET("/ping", func(c *gin.Context) {
//		// Return JSON response
//		c.JSON(http.StatusOK, gin.H{
//			"message": "pong",
//		})
//	})
//
//	// Start server on port 8080 (default)
//	// Server will listen on 0.0.0.0:8080 (localhost:8080 on Windows)
//	if err := r.Run(); err != nil {
//		log.Fatalf("failed to run server: %v", err)
//	}
//}

//import (
//	"context"
//	"fmt"
//)
//
//var ctx = context.Background()
//
//func ExampleClient() {
//	rdb := redis.NewClient(&redis.Options{
//		Addr:     "localhost:6379",
//		Password: "", // no password set
//		DB:       0,  // use default DB
//	})
//	defer rdb.Close()
//
//	err := rdb.Set(ctx, "key", "value", 0).Err()
//	if err != nil {
//		panic(err)
//	}
//
//	val, err := rdb.Get(ctx, "key").Result()
//	if err != nil {
//		panic(err)
//	}
//	fmt.Println("key", val)
//
//	val2, err := rdb.Get(ctx, "key2").Result()
//	if err == redis.Nil {
//		fmt.Println("key2 does not exist")
//	} else if err != nil {
//		panic(err)
//	} else {
//		fmt.Println("key2", val2)
//	}
//	// Output: key value
//	// key2 does not exist
//}

package main

import (
"gorm.io/driver/sqlite"
"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func main() {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("连接数据库失败")
	}

	// 自动建表
	db.AutoMigrate(&Product{})

	// 创建
	db.Create(&Product{Code: "D42", Price: 100})

	// 查询
	var product Product
	db.First(&product, 1) // 查找对应主键的产品
	db.First(&product, "code = ?", "D42") // 查找 code 为 D42 的所有产品

	// 更新 - 将产品价格更新为 200
	db.Model(&product).Update("Price", 200)
	// 更新 - 更新多个字段
	db.Model(&product).Updates(Product{Price: 200, Code: "F42"}) // 仅更新非零字段
	db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"})

	// 删除 - 删除产品
	db.Delete(&product, 1)
}
