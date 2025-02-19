package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/bthananya/finalproject/config"
	"github.com/bthananya/finalproject/models"
	"gorm.io/gorm"
)

func CreateCourtOwner(c *gin.Context) {
	var courtowner models.CourtOwner
	if err := c.ShouldBindJSON(&courtowner); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Invalid input"})
		return
	}

	if err := config.DB.Create(&courtowner).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Failed to create courtowner"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "data": courtowner})
}

func GetCourtOwnerByID(c *gin.Context) {
	courtownerID := c.Param("id")

	var courtowner models.CourtOwner
	if err := config.DB.First(&courtowner, "courtowner_id = ?", courtownerID).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "courtowner not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Error retrieving courtowner details"})
		}
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "data": courtowner})
}

func GetAllCourtOwners(c *gin.Context) {
	var courtowners []models.CourtOwner
	if err := config.DB.Find(&courtowners).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Error retrieving courtowners", "error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "data": courtowners})
}

func UpdateCourtOwner(c *gin.Context) {
	courtownerID := c.Param("id")

	var courtowner models.CourtOwner
	if err := config.DB.First(&courtowner, "courtowner_id = ?", courtownerID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "courtowner not found"})
		return
	}

	if err := c.ShouldBindJSON(&courtowner); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Invalid input"})
		return
	}

	// อัปเดตข้อมูล ในฐานข้อมูล
	if err := config.DB.Save(&courtowner).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Failed to update courtowner details"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "courtowner updated successfully", "data": courtowner})
}

func DeleteCourtOwner(c *gin.Context) {
	courtownerID := c.Param("id")

	var courtowner models.CourtOwner
	if err := config.DB.First(&courtowner, "courtowner_id = ?", courtownerID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "courtowner not found"})
		return
	}

	if err := config.DB.Delete(&courtowner).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Failed to delete courtowner"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "courtowner deleted successfully"})
}