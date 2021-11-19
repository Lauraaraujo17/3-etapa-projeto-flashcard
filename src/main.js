import React from "react";
import Home from "./components/home/home";
import Courses from "./components/courses/courses"
import CreateCourses from "./components/courses/createCourse"
import UpdateCourse from "./components/courses/updateCourse"
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Courses} />
        <Route path='/create' component={CreateCourses} />
        <Route path='/update/:colecaoId' component={UpdateCourse} />
      </Switch>
    </Container>
  </main>
);

export default Main;