import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import getDogFacts from "../crud/getDogFacts";
import ShowHoundFacts from '../ShowHoundFacts';

interface IHoundFacts {
  className?: string;
}

const HoundFacts: FunctionComponent<IHoundFacts> = ({ className }) => {
  const [houndTypes, setHoundTypes] = useState<string[]>([]);
  const [fetchFactsError, setFetchFactsError] = useState<string>();

  const fetchHoundFacts = async () => {
    try {
      const response = await getDogFacts();
      setHoundTypes(response.data.message.hound);
    } catch (e) {
      setFetchFactsError("Error!");
    }
  };

  useEffect(() => {
    fetchHoundFacts();
  }, []);

  return (
    <div className={className}>
      <ShowHoundFacts houndTypes={houndTypes} />
      {fetchFactsError && "ERROR!"}
    </div>
  );
};

export default HoundFacts;
