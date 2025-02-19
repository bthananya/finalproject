import { CourtData } from "./ICourt";

export interface CourtOwnerData {
    co_id: number;
    co_name: string;
    co_email: string;
    co_phone: string;
    court?: CourtData[]; // เชื่อมกับสนามที่เจ้าของเป็นเจ้าของ (optional)
}