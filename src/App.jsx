import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Project from './components/Projects/Project';
import NextProjects from './components/Projects/NextProjects';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/projects/:projectId">
          <Project />
        </Route>
        <Route path="/next-projects">
          <NextProjects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

function Home() {
  return <h2>Home</h2>;
}
