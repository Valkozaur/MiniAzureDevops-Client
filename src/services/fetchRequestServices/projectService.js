import { BASE_URL, PROJECT } from "../../consts/endpoints";

export const getProject = async (projectId) => {
    return await fetch(BASE_URL + PROJECT + `/${projectId}`);
}

export const addProject = async (name) => {
    const project = {
        Name: name,
    };

    return await fetch(BASE_URL + PROJECT, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(project),
    });
}

export const getTablesByProjectId = async (projectId) => {
    return await fetch(`${BASE_URL}${PROJECT}/${projectId}/tables`);
};


