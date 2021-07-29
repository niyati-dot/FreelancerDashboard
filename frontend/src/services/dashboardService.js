/* Author: Vishal Sancheti */

import axios from "axios";

export class dashboardService{
    // Get stat counts
    async stats(){
        const result = await axios.get("/api/dashboard/stats");
        return result.data;
    };

    // Get client project count
    async clientProjects(){
        const result = await axios.get("/api/dashboard/client-projects");
        return result.data;
    };

    // Get client invoice stats
    async clientInvoiceStats(){
        const result = await axios.get("/api/dashboard/client-invoice-stats");
        return result.data;
    };

    // Get timelog stats
    async timelogStats(){
        const result = await axios.get("/api/dashboard/timelog-stats");
        return result.data;
    };
}

export default new dashboardService()