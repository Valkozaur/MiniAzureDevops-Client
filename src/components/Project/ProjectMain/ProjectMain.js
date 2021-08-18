import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProject } from "../../../services/fetchRequestServices/projectService";
import ListTables from "../../Table/ListTables/ListTables"
import CreateTable from "../../Table/CreateTable/CreateTable"    

const ProjectMain = () => {
    let { id } = useParams();
    let [ project, setProject ]  = useState({});

    useEffect(async () => {
        const response = await getProject(id);
        setProject(await response.json());
        console.log(project);
    }, [])

    return (
        <>
            <h1>Project: 
                <span>{project.name}</span>
            </h1>
            <ListTables projectId={id}/>
            <CreateTable projectId={id}/>
        </>
    )
}

export default ProjectMain;