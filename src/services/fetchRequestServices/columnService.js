import { BASE_URL, COLUMN } from "../../consts/endpoints";

export const getColumns = async (tableId) => {
    const result = await fetch(BASE_URL + COLUMN + `?tableId=${tableId}`);
    return result.json();
};

export const addColumn = async (id, name, tableId) => {
    const column = {
            Name: name,
        TableId: tableId,
    };
    
    return await fetch(BASE_URL + COLUMN, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(column)
    });
}