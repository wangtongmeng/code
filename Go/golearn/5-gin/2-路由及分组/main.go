package main

import "github.com/gin-gonic/gin"

func goodsList(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "goods list",
	})
}
func goodsDetail(c *gin.Context) {
	id := c.Param("id")
	c.JSON(200, gin.H{
		"message": "goods detail",
		"id":      id,
	})
}
func createGoods(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "create goods",
	})
}

func main() {

	router := gin.Default()
	//router.GET("/goods/list", goodsList)
	//router.GET("/goods/1", goodsDetail)
	//router.GET("/goods/add", createGoods)

	// 路由分组
	goodsGroup := router.Group("/goods")
	{
		goodsGroup.GET("/list", goodsList)
		goodsGroup.GET("/:id", goodsDetail)
		goodsGroup.GET("/add", createGoods)
	}
}
