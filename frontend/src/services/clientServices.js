import axios from "axios";

export class clientServices{
    async list(){
        const result = await axios.get("/api/clients");
        return result.data;
    };
}

export default new clientServices()