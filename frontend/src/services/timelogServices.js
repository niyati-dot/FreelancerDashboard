import axios from "axios";

export class timelogServices{
    async list(){
        const result = await axios.get("/api/timelogs");
        return result.data;
    };

    async add(data){
        data.projectId = data.project;
        const result = await axios.post("/api/timelogs/add",data);
        return result.data;
    };

    async update(data){
        data.projectId = data.project;
        console.log(data);
        const result = await axios.put("/api/timelogs/update/"+data._id,data);
        return result.data;
    };

    async remove(data){
        const result = await axios.delete("/api/timelogs/remove/"+data._id,data);
        return result.data;
    };
}

export default new timelogServices()