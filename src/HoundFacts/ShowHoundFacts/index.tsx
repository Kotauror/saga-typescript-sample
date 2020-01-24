import * as React from "react";
import { FunctionComponent } from "react";

interface IShowHoundFacts {
  houndTypes: string[];
  className?: string;
}

const ShowHoundFacts: FunctionComponent<IShowHoundFacts> = ({
  houndTypes,
  className
}) => (
  <div className={className}>
    <ul className="dogTypes">
      {houndTypes.map(hound => (
        <li key={hound}>{hound}</li>
      ))}
    </ul>
  </div>
);

export default ShowHoundFacts;
