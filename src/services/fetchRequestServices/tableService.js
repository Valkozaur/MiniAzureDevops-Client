import { BASE_URL, TABLE } from "../../consts/endpoints";

export const createTable = async (tableName) => {
    let table = {
        Name: tableName
    }
    console.log(table);

    return fetch(BASE_URL + TABLE, {
        method: "POST",
        headers: {
            'accept': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(table)
    });
}

export const getTable = async (id) => {
    let result = await fetch(BASE_URL + TABLE + `?tableId=${id}`);
    return await result.json();
}