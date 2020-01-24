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
    {houndTypes.map(hound => (
      <li key={hound}>{hound}</li>
    ))}
  </div>
);

export default ShowHoundFacts;
