import { BASE_URL, TABLE } from "../../consts/endpoints";

export const createTable = async (tableName, projectId) => {
    const table = {
        Name: tableName,
        ProjectId: projectId
    }
    return await fetch(BASE_URL + TABLE, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(table)
    });
}

export const getTable = async (id) => {
    const result = await fetch(BASE_URL + TABLE + `?tableId=${id}`);
    return result.json();
}