package main

import (
	"github.com/gin-gonic/gin"
)

func listUsers(c *gin.Context) {
	c.JSON(200, gin.H{"users": []string{"user1", "user2"}})
}
func getUser(c *gin.Context) {
	id := c.Param("id")
	c.JSON(200, gin.H{"user_id": id})
}
func listPosts(c *gin.Context) {
	c.JSON(200, gin.H{"posts": []string{"post1", "post2"}})
}
func getPost(c *gin.Context) {
	id := c.Param("id")
	c.JSON(200, gin.H{"post_id": id})
}

func main() {
	router := gin.Default()

	api := router.Group("/api")
	{
		// /api/v1
		v1 := api.Group("/v1")
		{
			// /api/v1/users
			users := v1.Group("/users")
			users.GET("/", listUsers)
			users.GET("/:id", getUser)

			// /api/v1/posts
			posts := v1.Group("/posts")
			posts.GET("/", listPosts)
			posts.GET("/:id", getPost)
		}
	}

	router.Run(":8080")
}

/**
# /api/v1/users
curl http://localhost:8080/api/v1/users
curl http://localhost:8080/api/v1/users/123

# /api/v1/posts
curl http://localhost:8080/api/v1/posts
curl http://localhost:8080/api/v1/posts/456
*/
