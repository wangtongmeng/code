package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type User struct {
	ID           uint           // Standard field for the primary key
	Name         string         // A regular string field
	Email        *string        // A pointer to a string, allowing for null values
	Age          uint8          // An unsigned 8-bit integer
	Birthday     *time.Time     // A pointer to time.Time, can be null
	MemberNumber sql.NullString // Uses sql.NullString to handle nullable strings
	ActivatedAt  sql.NullTime   // Uses sql.NullTime for nullable time fields
	CreatedAt    time.Time      // Automatically managed by GORM for creation time
	UpdatedAt    time.Time      // Automatically managed by GORM for update time
	ignored      string         // fields that aren't exported are ignored
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

	//db.Create(&User{Name: "lisi"})

	// updates语句不会更新零值，但是update会更新
	//db.Model(&User{ID: 1}).Update("Name", "")
	//db.Model(&User{ID: 1}).Updates(User{Name: ""})

	// 解决仅更新非零值字段的方法有两种
	// 1.将string设置成 *string
	// 2.使用sql的NULLxxx解决
	//empty := ""
	//db.Model(&User{ID: 1}).Updates(User{Email: &empty})

	// 创建查看id和影响行数
	user := User{
		Name: "lisi",
	}
	result := db.Create(&user)
	fmt.Println(user.ID) // 数据库生成的id

	fmt.Println(result.Error)        // <nil>
	fmt.Println(result.RowsAffected) // 1
}
