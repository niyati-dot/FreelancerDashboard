import React, {useMemo} from 'react';
import PageHeader from "../components/PageHeader";
import Datatable from "../components/Datatable";

export default function Timelogs(factory, deps){
    const columns = useMemo( () => (
        [
            { Header: 'Project', accessor: 'project'},
            { Header: 'Client', accessor: 'client'},
            { Header: 'Task', accessor: 'task'},
            { Header: 'Start At', accessor: 'startAt'},
            { Header: 'End At', accessor: 'endAt'}
        ]
    ),[]);

    const data = useMemo( () => (
        [
            {
                project: "Project I",
                client: "Giacomo Guilizzoni",
                task: "Wireframe",
                startAt: "5-06-2021 01:10:20",
                endAt: "5-06-2021 01:32:20"
            },
            {
                project: "Project H",
                client: "Marco Botton",
                task: "Registration",
                startAt: "1-06-2021 11:20:10",
                endAt: "1-06-2021 13:10:00"
            },
            {
                project: "Project G",
                client: "Mariah Guilizzoni",
                task: "Profile Management",
                startAt: "5-05-2021 04:22:00",
                endAt: "5-05-2021 05:42:00"
            },
            {
                project: "Project F",
                client: "Giacomo Guilizzoni",
                task: "PSD to HTML",
                startAt: "2-05-2021 03:00:00",
                endAt: "2-05-2021 08:00:00",
            },
            {
                project: "Project E",
                client: "Giacomo Guilizzoni",
                task: "Dashboard",
                startAt: "12-04-2021 09:00:00",
                endAt: "12-04-2021 12:00:00",
            },
            {
                project: "Project D",
                client: "Giacomo Guilizzoni",
                task: "Forgot Password",
                startAt: "10-01-2021 09:00:00",
                endAt: "10-01-2021 11:05:00"
            },
            {
                project: "Project H",
                client: "Marco Botton",
                task: "Registration",
                startAt: "1-06-2021 11:20:10",
                endAt: "1-06-2021 13:10:00"
            },
            {
                project: "Project G",
                client: "Mariah Guilizzoni",
                task: "Profile Management",
                startAt: "5-05-2021 04:22:00",
                endAt: "5-05-2021 05:42:00"
            },
            {
                project: "Project F",
                client: "Giacomo Guilizzoni",
                task: "PSD to HTML",
                startAt: "2-05-2021 03:00:00",
                endAt: "2-05-2021 08:00:00",
            },
            {
                project: "Project E",
                client: "Giacomo Guilizzoni",
                task: "Dashboard",
                startAt: "12-04-2021 09:00:00",
                endAt: "12-04-2021 12:00:00",
            },
            {
                project: "Project D",
                client: "Giacomo Guilizzoni",
                task: "Forgot Password",
                startAt: "10-01-2021 09:00:00",
                endAt: "10-01-2021 11:05:00"
            },
            {
                project: "Project H",
                client: "Marco Botton",
                task: "Registration",
                startAt: "1-06-2021 11:20:10",
                endAt: "1-06-2021 13:10:00"
            },
            {
                project: "Project G",
                client: "Mariah Guilizzoni",
                task: "Profile Management",
                startAt: "5-05-2021 04:22:00",
                endAt: "5-05-2021 05:42:00"
            },
            {
                project: "Project F",
                client: "Giacomo Guilizzoni",
                task: "PSD to HTML",
                startAt: "2-05-2021 03:00:00",
                endAt: "2-05-2021 08:00:00",
            },
            {
                project: "Project E",
                client: "Giacomo Guilizzoni",
                task: "Dashboard",
                startAt: "12-04-2021 09:00:00",
                endAt: "12-04-2021 12:00:00",
            },
            {
                project: "Project D",
                client: "Giacomo Guilizzoni",
                task: "Forgot Password",
                startAt: "10-01-2021 09:00:00",
                endAt: "10-01-2021 11:05:00"
            },
        ]
    ),[]);

    return (
        <div>
            <PageHeader title="Time logs" subtitle=""/>
            <Datatable columns={columns} data={data} />
        </div>
    )
}


