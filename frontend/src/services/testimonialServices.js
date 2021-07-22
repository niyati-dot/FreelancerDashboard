/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 *  Services Page for Testimonials.
 */

import axios from "axios";

export class testimonialServices{
    async list(){
        const result = await axios.get("/api/testimonials");
        return result.data;
    };

    async add(data){
        const result = await axios.post("/api/testimonials/add",data);
        return result.data;
    };

    async update(data){
        console.log(data);
        const result = await axios.put("/api/testimonials/update/"+data.id,data);
        return result.data;
    };

    async remove(data){
        const result = await axios.delete("/api/testimonials/remove/"+data._id,data);
        return result.data;
    };
}

export default new testimonialServices()