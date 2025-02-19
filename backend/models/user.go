package models

type User struct {
	UserID   uint   `gorm:"primaryKey;autoIncrement" json:"user_id"`
	UserName string `json:"user_name"`
	Email    string `json:"user_email"`
	Phone    string `json:"user_phone"`
	Password string `json:"user_password"`
}
