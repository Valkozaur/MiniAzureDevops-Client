import React, { useState, useEffect } from "react";

import "./App.css";
//import DisplayTable from './components/DisplayTable/DisplayTable';
import { getTableData } from "./services/dataHelper";
import CreateProject from "./components/Project/CreateProject/CreateProject";
import ProjectMain from "./components/Project/ProjectMain/ProjectMain";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Breadcrumbs } from "@material-ui/core";

function App() {
  const onBreadCrumbClick = () => {};

  return (
    <>
      <Router>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            to="project/e20daf1f-c5e3-4357-f192-08d95f1ae0d9"
          >
            AForbesProject
          </Link>
          <Link
            color="inherit"
            to="project/create"
          >
            CreateProject
          </Link>
        </Breadcrumbs>
        <Switch>
        <Route path="/project/create">
            <CreateProject />
          </Route>
          <Route path="/project/:id">
            <ProjectMain />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
