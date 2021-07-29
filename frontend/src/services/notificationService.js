import axios from "axios";

export class notificationService {
    async getAllNotifications(userId) {
        const result = await axios.post("/api/notification/getAll" ,{userId: userId} );
        return result;
    }

    async setStatus(value) {
        console.log(value);
        const result = await axios.post("/api/notification/setStatus" ,value);
        return result;
    }
}

export default new notificationService()