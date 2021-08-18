import { useEffect, useState } from "react"; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { getTablesByProjectId } from "../../../services/fetchRequestServices/projectService";

const ListTables = ({ projectId }) => {
    const [ tables, setTables ] = useState([]);

    useState(async () => {
        const response = await getTablesByProjectId(projectId);
        setTables(await response.json());
        console.log(tables);
    }, []);

    return(
        <List component="nav" aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Chelsea Otakan" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Eric Hoffman" />
        </ListItem>
      </List>
    )
}

export default ListTables;