import axios from "axios";

export class clientsServices{
    async list(){
        const result = await axios.get("/api/clients/");
        return result.data;
    };
}

export default new clientsServices()