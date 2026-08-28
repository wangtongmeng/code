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
	dir := getCurrentPath()
	r.LoadHTMLGlob(filepath.Join(dir, "templates", "*"))
	r.GET("", func(c *gin.Context) {
		c.HTML(200, "index.html", map[string]any{
			"title": "这是网页标题",
		})
	})
	// 使用 StaticFS 并启用目录浏览
	r.StaticFS("/static", gin.Dir(filepath.Join(dir, "static"), true))
	r.StaticFile("/abcd", filepath.Join(dir, "test.txt"))
	r.Run(":8080")
}
