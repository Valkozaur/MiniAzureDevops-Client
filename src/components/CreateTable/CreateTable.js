import { createTable } from "../../services/fetchRequestServices/tableService";

const CreateTable = () => {
    const onCreateTableSubmitHandler = async (e) => {
        e.preventDefault();

        const { name } = e.target;
        console.log(name);

        try{
            var response = await createTable(name.value);
        }catch(ex){
            console.log(ex);
        }
        console.log(response);
    }

    return (
        <section className="create">
        <form onSubmit={onCreateTableSubmitHandler}>
            <fieldset>
                <legend>Add new Pet</legend>
                <p class="field">
                    <label htmlFor="name">Name</label>
                    <span class="input">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <span class="actions"></span>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Add Pet" />
            </fieldset>
        </form>
    </section>
    )
}

export default CreateTable;