import { AdminData } from "../interface/IAdmin";
import { CourtOwnerData } from "../interface/ICourtOwner";


const apiURL = "http://localhost:8080";

/* Admin API Functions */
// Create Admin
async function createAdmin(data: AdminData) {
    try {
        const response = await fetch(`${apiURL}/admin`, {
            method: "POST",
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (response.ok) {
            return { status: true, message: res.message, data: res.data };
        } else {
            return { status: false, message: res.error || "Failed to create admin" };
        }
    } catch (error: any) {
        console.error("Error creating admin:", error);
        return { status: false, message: error.message || "An error occurred" };
    }
}

// Get All Admins
async function getAllAdmins() {
    try {
        const response = await fetch(`${apiURL}/admins`, {
            method: "GET",
        });

        if (response.ok) {
            const data = await response.json();
            return { status: true, data };
        } else {
            const error = await response.json();
            return {
                status: false,
                message: error.message || "Failed to fetch admins",
            };
        }
    } catch (error) {
        console.error("Error fetching admins:", error);
        return { status: false, message: "An unexpected error occurred" };
    }
}

// Get Admin by ID
async function getAdminById(adminId: string) {
    try {
        const response = await fetch(`${apiURL}/admin/${adminId}`, {
            method: "GET",
        });

        if (response.ok) {
            const data = await response.json();
            return { status: true, data };
        } else {
            const error = await response.json();
            return {
                status: false,
                message: error.message || "Failed to fetch admin",
            };
        }
    } catch (error) {
        console.error("Error fetching admin by ID:", error);
        return { status: false, message: "An unexpected error occurred" };
    }
}

// Update Admin
async function updateAdmin(adminId: string, data: AdminData) {
    try {
        const response = await fetch(`${apiURL}/admin/${adminId}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (response.ok) {
            return { status: true, message: res.message, data: res.data };
        } else {
            return { status: false, message: res.error || "Failed to update admin" };
        }
    } catch (error: any) {
        console.error("Error updating admin:", error);
        return { status: false, message: error.message || "An error occurred" };
    }
}

// Delete Admin
async function deleteAdmin(adminId: string) {
    try {
        const response = await fetch(`${apiURL}/admin/${adminId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            return { status: true, message: "Admin deleted successfully" };
        } else {
            const error = await response.json();
            return {
                status: false,
                message: error.message || "Failed to delete admin",
            };
        }
    } catch (error) {
        console.error("Error deleting admin:", error);
        return { status: false, message: "An unexpected error occurred" };
    }
}

/* CourtOwner API Function */
//Create CourtOwner
async function createCourtOwner(data: CourtOwnerData) {
    try {
        const response = await fetch(`${apiURL}/courtowner`, {
            method: "POST",
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (response.ok) {
            return { status: true, message: res.message, data: res.data };
        } else {
            return { status: false, message: res.error || "Failed to create courtowner" };
        }
    } catch (error: any) {
        console.error("Error creating courtowner:", error);
        return { status: false, message: error.message || "An error occurred" };
    }
}

//Get CourtOwner
async function getAllCourtOwners() {
    try {
        const response = await fetch(`${apiURL}/courtowners`, {
            method: "GET",
        });

        if (response.ok) {
            const data = await response.json();
            return { status: true, data };
        } else {
            const error = await response.json();
            return {
                status: false,
                message: error.message || "Failed to fetch courtowners",
            };
        }
    } catch (error) {
        console.error("Error fetching courtowners:", error);
        return { status: false, message: "An unexpected error occurred" };
    }
}

// Get courtowner by ID
async function getCourtOwnerById(courtownerId: string) {
    try {
        const response = await fetch(`${apiURL}/courtowner/${courtownerId}`, {
            method: "GET",
        });

        if (response.ok) {
            const data = await response.json();
            return { status: true, data };
        } else {
            const error = await response.json();
            return {
                status: false,
                message: error.message || "Failed to fetch courtowner",
            };
        }
    } catch (error) {
        console.error("Error fetching courtowner by ID:", error);
        return { status: false, message: "An unexpected error occurred" };
    }
}

// Update CourtOwner
async function updateCourtOwner(courtownerId: string, data: CourtOwnerData) {
    try {
        const response = await fetch(`${apiURL}/courtowner/${courtownerId}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (response.ok) {
            return { status: true, message: res.message, data: res.data };
        } else {
            return { status: false, message: res.error || "Failed to update courtowner" };
        }
    } catch (error: any) {
        console.error("Error updating courtowner:", error);
        return { status: false, message: error.message || "An error occurred" };
    }
}

// Delete CourtOwner
async function deleteCourtOwner(courtownerId: string) {
    try {
        const response = await fetch(`${apiURL}/courtowner/${courtownerId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            return { status: true, message: "Deleted successfully" };
        } else {
            const error = await response.json();
            return {
                status: false,
                message: error.message || "Failed to delete courtowner",
            };
        }
    } catch (error) {
        console.error("Error deleting courtowner:", error);
        return { status: false, message: "An unexpected error occurred" };
    }
}

export {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin,
    createCourtOwner,
    getAllCourtOwners,
    getCourtOwnerById,
    updateCourtOwner,
    deleteCourtOwner,
}