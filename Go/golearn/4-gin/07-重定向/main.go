package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// External redirect (GET)
	router.GET("/old", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "https://www.google.com/")
	})

	// Redirect from POST -- use 302 or 307 to preserve behavior
	router.POST("/submit", func(c *gin.Context) {
		c.Redirect(http.StatusFound, "/result")
	})

	// Internal router redirect (no HTTP round-trip)
	router.GET("/test", func(c *gin.Context) {
		c.Request.URL.Path = "/final"
		router.HandleContext(c)
	})

	router.GET("/final", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"hello": "world"})
	})

	router.GET("/result", func(c *gin.Context) {
		c.String(http.StatusOK, "Redirected here!")
	})

	router.Run(":8080")
}

/**
curl -I http://localhost:8080/old
curl -X POST -I http://localhost:8080/submit
curl http://localhost:8080/test
*/
