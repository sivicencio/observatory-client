import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Typography } from 'antd';
import Projects from './components/Projects';

const { Title } = Typography;

export default function App() {
  return (
    <div>
      <header>
        <Title>Observatory Client</Title>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}
