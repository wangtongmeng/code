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
	// 基于当前文件(02.匿名函数启动goroutine.go)所在目录构建绝对路径，确保无论从哪运行都能找到模板
	dir := getCurrentPath()
	r.LoadHTMLGlob(filepath.Join(dir, "templates", "*"))
	//r.LoadHTMLFiles("templates/index.html")
	r.GET("", func(c *gin.Context) {
		c.HTML(200, "index.html", map[string]any{
			"title": "这是网页标题",
		})
	})
	r.Run(":8080")
}
