/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 *  Services Page for Testimonials.
 */

import axios from "axios";

export class testimonialServices{

    // list of all testimonials
    async list(){
        const result = await axios.get("/api/testimonials");
        return result.data;
    };

    // add data
    async add(data){
        const result = await axios.post("/api/testimonials/add",data);
        return result.data;
    };

    // update data by id
    async update(data){
        console.log(data);
        const result = await axios.put("/api/testimonials/update/"+data.id,data);
        return result.data;
    };

    // remove data by id
    async remove(data){
        const result = await axios.delete("/api/testimonials/remove/"+data._id,data);
        return result.data;
    };
}

export default new testimonialServices()