package main

import (
	"github.com/gin-gonic/gin"
)

// AuthRequired is a placeholder for your auth middleware.
func AuthRequired() gin.HandlerFunc {
	return func(c *gin.Context) {
		// ... check token, session, etc.
		c.Next()
	}
}

func healthCheck(c *gin.Context) {
	c.JSON(200, gin.H{"status": "ok"})
}
func getProfile(c *gin.Context) {
	c.JSON(200, gin.H{"profile": "data"})
}
func updateSettings(c *gin.Context) {
	c.JSON(200, gin.H{"settings": "updated"})
}

func main() {
	router := gin.Default()

	// Public routes -- no auth required
	public := router.Group("/public")
	{
		public.GET("/health", healthCheck)
	}

	// Private routes -- auth middleware applied to the whole group
	private := router.Group("/private")
	private.Use(AuthRequired())
	{
		private.GET("/profile", getProfile)
		private.POST("/settings", updateSettings)
	}

	router.Run(":8080")
}

/**
# 公开路由（无认证）
curl http://localhost:8080/public/health

# 私有路由（需要认证）
curl http://localhost:8080/private/profile
curl -X POST http://localhost:8080/private/settings
*/
