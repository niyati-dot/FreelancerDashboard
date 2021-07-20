import axios from "axios";

export class projectServices{
    async list(){
        const result = await axios.get("/api/projects");
        return result.data;
    };
}

export default new projectServices()