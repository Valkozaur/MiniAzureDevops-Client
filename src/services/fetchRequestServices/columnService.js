import { BASE_URL, COLUMN } from "../../consts/endpoints";

export const getColumns = async (tableId) => {
    let result = fetch(BASE_URL + COLUMN + `?tableId=${tableId}`);
    return await result.json();
};

export const addColumn = async (id, name, tableId) => {
    let column = {
        Id: id,
        Name: name,
        TableId: tableId,
    }

    console.log(column);

    return fetch(BASE_URL + COLUMN, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            //'accepts': 'application/json',
        },
        body: JSON.stringify(column)
    });
}