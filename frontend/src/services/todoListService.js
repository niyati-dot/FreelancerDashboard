/**
 * Author: Bansi Mehta
 * Created On: 20201-07-20
 * Service containing api calls for TO-DO List.
 */
import axios from "axios"
export class todoListService {
    async getAllTasks(date) {
        const result = await axios.post("/api/todoLists/getList", { "currentDate": date });
        return result;
    }

    async markTaskAsDone(id) {
        const result = await axios.put("/api/todoLists/markAsDone", { "id": id });
        return result;
    }

    async deleteTask(id) {
        const result = await axios.delete("/api/todoLists/deleteItem/" + id);
        return result;
    }

    async saveTask(saveData) {
        const result = await axios.post("/api/todoLists/saveItem", saveData);
        return result;
    }
}

export default new todoListService()