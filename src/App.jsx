import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Typography } from 'antd';

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
            <Link to="/section">Section</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/section">
          <Section />
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

function Section() {
  return <h2>First section</h2>;
}
