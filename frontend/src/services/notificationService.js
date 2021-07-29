import axios from "axios";

export class notificationService {
    async getAllNotifications() {
        const result = await axios.get("/api/notification/getAll" );
        return result;
    }

    async setStatus(value) {
        console.log(value);
        const result = await axios.post("/api/notification/setStatus" ,value);
        return result;
    }
}

export default new notificationService()