import axios from "axios";

class ApiHelper {
    baseUrl = "";
    constructor() {
        this.baseUrl = "http://127.0.0.1:8000/api";
    }
    async getBaseUrl() {
        return this.baseUrl;
    }

    async getRoleString(role) {
        switch (role) {
            case 1:
                return "Admin";
            case 2:
                return "Kadus";
            case 3:
                return "Kasi";
            default:
                return "Unknown";
        }
    }

    async getRoleInt(role) {
        switch (role) {
            case "Admin":
                return 1;
            case "Kadus":
                return 2;
            case "Kasi":
                return 3;
            default:
                return 0;
        }
    }

    async getProfile() {
        const url = this.baseUrl + "/profile";
        var res = await axios.get(url, {
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        if (res.status === 200) {
            return res.data.user;
        } else {
            return null;
        }
    }
}

export default new ApiHelper();
