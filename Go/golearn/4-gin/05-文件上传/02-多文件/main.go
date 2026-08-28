package main

import (
	"fmt"
	"log"
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	// Set a lower memory limit for multipart forms (default is 32 MiB)
	router.MaxMultipartMemory = 8 << 20 // 8 MiB

	router.POST("/upload", func(c *gin.Context) {
		// Multipart form
		form, err := c.MultipartForm()
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		files := form.File["files"]

		for _, file := range files {
			log.Println(file.Filename)

			// Upload the file to specific dst.
			dst := filepath.Join("./files/", filepath.Base(file.Filename))
			c.SaveUploadedFile(file, dst)
		}
		c.String(http.StatusOK, fmt.Sprintf("%d files uploaded!", len(files)))
	})

	router.Run(":8080")
}

/**
curl -X POST http://localhost:8080/upload \
  -F "file=@/Users/wangtongmeng/Downloads/Union (2).png" \
  -F "file=@/Users/wangtongmeng/Downloads/Union (1).png" \
  -H "Content-Type: multipart/form-data"
*/
