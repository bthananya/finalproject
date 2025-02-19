package models

type CourtOwner struct {
	CourtOwnerID uint   `gorm:"primaryKey;autoIncrement" json:"courtowner_id"`
	COName       string `json:"co_name"`
	COEmail      string `json:"co_email"`
	COPhone      string `json:"co_phone"`
	COPassword   string `json:"co_password"`
	
	// สัมพันธ์ One-to-Many กับ Court
	Court []Court `json:"court" gorm:"foreignKey:CourtOwnerID"`
}
