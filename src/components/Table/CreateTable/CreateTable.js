import { createTable } from "../../../services/fetchRequestServices/tableService";

const CreateTable = ({ projectId }) => {
    const onCreateTableSubmitHandler = async (e) => {
        e.preventDefault();
        const { name } = e.target;
        console.log(name.value);

        createTable(name.value, projectId);
    }

    return (
        <section className="create">
        <form onSubmit={onCreateTableSubmitHandler}>
            <fieldset>
                <legend>CreateTable</legend>
                <p class="field">
                    <label htmlFor="name">Name</label>
                    <span class="input">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <span class="actions"></span>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Create Table" />
            </fieldset>
        </form>
    </section>
    )
}

export default CreateTable;