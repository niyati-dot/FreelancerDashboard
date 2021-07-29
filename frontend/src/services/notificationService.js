import axios from "axios";

export class notificationService {
    async getAllNotifications() {
        const result = await axios.get("/api/notification/getAll" );
        return result;
    }
}

export default new notificationService()