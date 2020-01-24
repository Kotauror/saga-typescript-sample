import * as React from "react";
import { FunctionComponent, useEffect } from "react";
import getCatFacts from './crud/getCatFacts';

interface ICatFacts {
  className?: string;
}

const CatFacts: FunctionComponent<ICatFacts> = ({ className }) => {
  const fetchCatFacts = async () => {
    try {
      const response = await getCatFacts();
      console.log(response)
    } catch(e) {
      console.log("erroor")
    }
  };

  useEffect(() => {
    fetchCatFacts();
  }, []);

  return <div>hello</div>;
};

export default CatFacts;