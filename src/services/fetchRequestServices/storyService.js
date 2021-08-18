import { BASE_URL, STORY } from "../../consts/endpoints";

export const addStory = async (id, name, columnId) => {
    const story = { id, name, columnId };

    debugger;

    return await fetch(BASE_URL + STORY, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(story)
    });
}