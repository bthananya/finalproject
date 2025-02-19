package models

type Admin struct {
	AdminID    uint   `gorm:"primaryKey;autoIncrement" json:"admin_id"`
	AdminName  string `json:"admin_name"`
	AdminEmail string `json:"admin_email"`
	AdminPhone string `json:"admin_phone"`
	Password   string `json:"password"`
}
