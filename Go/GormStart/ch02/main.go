package main

import (
	"database/sql"
	"log"
	"os"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type Product struct {
	gorm.Model
	//Code  string
	Code  sql.NullString // 设置null类型，解决字符串零值不更新的问题
	Price uint
}

func main() {
	// 参考 https://github.com/go-sql-driver/mysql#dsn-data-source-name 获取详情
	dsn := "root:MyNewPass@2026@tcp(43.138.67.183:3306)/gorm_test?charset=utf8mb4&parseTime=True&loc=Local"

	// 设置全局的logger，这个logger在我们执行每个sql语句时会打印每一行sql
	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold: time.Second, // Slow SQL threshold
			LogLevel:      logger.Info, // Log level
			Colorful:      true,        // Disable color
		},
	)

	// 全局模式
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: newLogger,
	})
	if err != nil {
		panic(err)
	}

	// 定义表结构，直接生成对应的表 - migrations
	// 自动建表
	_ = db.AutoMigrate(&Product{})

	// 创建
	//db.Create(&Product{Code: "D42", Price: 100})
	//db.Create(&Product{Code: sql.NullString{String: "D42", Valid: true}, Price: 100})
	db.Create(&Product{Code: sql.NullString{String: "", Valid: true}, Price: 100})

	// 查询
	//var product Product
	//db.First(&product, 1)                 // 查找对应主键的产品
	//db.First(&product, "code = ?", "D42") // 查找 code 为 D42 的所有产品

	// 更新 - 将产品价格更新为 200
	//db.Model(&product).Update("Price", 200)
	// 更新 - 更新多个字段
	//db.Model(&product).Updates(Product{Price: 200, Code: "F42"}) // 仅更新非零字段
	//db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"})

	// 删除 - 删除产品 逻辑删除
	//db.Delete(&product, 1)

}
