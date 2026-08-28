package main

import (
	"github.com/gin-gonic/gin"
	"path/filepath"
	"runtime"
)

func getCurrentPath() string {
	_, currentFile, _, _ := runtime.Caller(0)
	dir := filepath.Dir(currentFile)
	return dir
}

func main() {
	r := gin.Default()
	// 加载模板 只有这里加载了模板，下面才能用
	dir := getCurrentPath()
	r.LoadHTMLGlob(filepath.Join(dir, "templates", "*"))
	//r.LoadHTMLFiles("templates/index.html")
	r.GET("", func(c *gin.Context) {
		c.HTML(200, "index.html", map[string]any{
			"title": "这是网页标题",
		})
	})
	r.GET("download", func(c *gin.Context) {
		c.Header("Content-Type", "application/octet-stream")             // 表示是文件流，唤起浏览器下载，一般设置了这个，就要设置文件名
		c.Header("Content-Disposition", "attachment; filename=test.txt") // 用来指定下载下来的文件名
		_, currentFile, _, _ := runtime.Caller(0)
		dir := filepath.Dir(currentFile)
		c.File(filepath.Join(dir, "test.txt"))
	})
	r.Run(":8080")
}
