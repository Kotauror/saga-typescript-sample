import * as React from "react";
import { FunctionComponent } from "react";
import HoundFacts from './HoundFacts/GetHoundFacts';

interface IApp {
  className?: string;
}

const App: FunctionComponent<IApp> = ({ className }) => (
  <div className={className}>
    <HoundFacts />
  </div>
);

export default App;
