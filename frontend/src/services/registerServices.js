/**
 * Author: Deep Patel
 * Created On: 2021-07-28
 */

 import axios from "axios"

 export class registerService {
     
     async addNewUser(data) {
        const result = await axios.post('/api/register/add', data);
        return result.data;
     }

     async fatchUser(user) {
        const result = await axios.post("/api/register/fatchUser" , user);
        return result.data;
    }
 }
 
 export default new registerService()