import { CourtOwnerData } from "./ICourtOwner";

export interface CourtData {
    court_id: number;
    court_name: string;
    location: string;
    tel: string;
    opening_hours: string;
    price: string;
    province: string;
    image: string;
    note: string;
    owner_id?: number;
    owner?: CourtOwnerData; // เพิ่ม owner เพื่อเชื่อมกับเจ้าของสนาม (Optional)
}