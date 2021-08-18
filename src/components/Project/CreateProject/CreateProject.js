import { TextField, Button } from "@material-ui/core";

import { addProject } from '../../../services/fetchRequestServices/projectService';

const CreateProject = () => {
    const onCreateProjectSubmitHandler = async (e) => {
        e.preventDefault();

        const { name } = e.target;
        const response = await addProject(name.value);
        const project = await response.json();
        debugger;
    };

    return (
        <section className="CreateProject">
        <form onSubmit={onCreateProjectSubmitHandler} method="POST">
            <TextField id="outlined-basic" label="Project Name" variant="outlined" name="name"/>
            <Button type="submit" variant="contained" color="primary">Create</Button>
        </form>
    </section>
    )
}

export default CreateProject;