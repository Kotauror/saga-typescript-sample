import * as React from "react";
import { FunctionComponent } from "react";
import "./App.css";

interface IApp {
  className?: string;
}

const App: FunctionComponent<IApp> = ({ className }) => (
  <div className={className}>
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </p>
  </div>
);

export default App;
