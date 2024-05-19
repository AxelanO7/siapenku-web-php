class ApiHelper {
    baseUrl = "";
    constructor() {
        this.baseUrl = "http://127.0.0.1:8000/api";
    }
    async getBaseUrl() {
        return this.baseUrl;
    }
}

export default new ApiHelper();
