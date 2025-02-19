package models

type Court struct {
	CourtID      uint   `gorm:"primaryKey;autoIncrement" json:"court_id"`
	CourtName    string `json:"court_name"`
	Location     string `json:"location"`
	Tel          string `json:"tel"`
	OpeningHours string `json:"opening_hours"`
	Price        string `json:"price"`
	Province     string `json:"province"`
	Image        string `json:"image"`
	Note         string `json:"note"`

	// กำหนด Foreign Key
	CourtOwnerID *uint      `json:"owner_id"`
	CourtOwner   CourtOwner `json:"owner" gorm:"foreignKey:CourtOwnerID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
