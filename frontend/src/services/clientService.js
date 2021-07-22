/**
 * Author: Janvi Patel
 * Created On: 20201-07-20
 */

 import axios from "axios"

 export class ClientService {
     async getAllClients() {
         const result = await axios.get("/api/clients/getAll");
         return result;
     }
 
     async editClient(client) {
         const result = await axios.post("/api/clients/edit", client );
         return result;
     }
 
     async viewOneClient(client) {
         const result = await axios.post("/api/clients/viewOne" , client);
         return result;
     }
 
     async addNewClient(saveData) {
        const result = await axios.post('/api/clients/add', saveData);
         return result;
     }

     async deleteClient(deleteData) {
        const result = await axios.post("/api/clients/delete", deleteData);
        return result;
     }
 }
 
 export default new ClientService()