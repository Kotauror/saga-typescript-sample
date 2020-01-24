import * as React from "react";
import { FunctionComponent } from "react";
import GetHoundFacts from './HoundFacts/GetHoundFacts';

interface IApp {
  className?: string;
}

const App: FunctionComponent<IApp> = ({ className }) => (
  <div className={className}>
    <GetHoundFacts />
  </div>
);

export default App;
