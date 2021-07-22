import axios from "axios";

export class projectsServices{
    async list(){
        const result = await axios.get("/api/projects");
        return result.data;
    };

    async get(id){
        const result = await axios.get("/api/projects/"+id);
        return result.data;
    };

    async add(data){
        //data.projectId = data.project;
        const result = await axios.post("/api/projects/add",data);
        return result.data;
    };

    async update(data){
        //data.projectId = data.project;
        console.log(data);
        const result = await axios.put("/api/projects/update/"+data._id,data);
        return result.data;
    };

    async remove(data){
        const result = await axios.delete("/api/projects/remove/"+data._id,data);
        return result.data;
    };
}

export default new projectsServices()