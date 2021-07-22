/**
 * Author: Bansi Mehta
 * Created On: 20201-07-20
 * Service containing api calls for TO-DO List.
 */
 import axios from "axios"
 export class TodoListService {
     async getTags(date) {
         const result = await axios.post("/api/invoices/tags",  date );
         return result;
     }
 
     async addInvoice(data) {
         const result = await axios.post("/api/invoices/save", data);
         return result;
     }
 
     async findInvoice(data) {
         const result = await axios.post("/api/invoices/findinvoice", data);
         return result;
     }
 
     async getAllProject() {
         const result = await axios.get("/api/invoices/getproject");
         return result;
     }
     
     async getAllInvoices() {
        const result = await axios.get("/api/invoices/fetchinvoices");
        return result;
    }

    async deleteinvoice(data) {
        const result = await axios.post("/api/invoices/deleteinvoice",data);
        return result;
    }
     
    async updateInvoice(data) {
        const result = await axios.post("/api/invoices/updateinvoice",data);
        return result;
    }
 }
 
 export default new TodoListService()