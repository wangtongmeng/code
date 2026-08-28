package main

import (
	"log"
	"os"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type User struct {
	UserID uint `gorm:"primarykey"`
	//Name   string `gorm:"column:user_name;type:varchar(50);index: idx_user_name"`
	Name string `gorm:"column:user_name;type:varchar(50); unique;default:'wtm'"`
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
	_ = db.AutoMigrate(&User{})

	db.Create(&User{})

}
