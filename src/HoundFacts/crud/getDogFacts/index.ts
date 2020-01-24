import { doRequest } from "../../../Request";

const getDogFacts = () => {
  return doRequest({
    path: "api/breeds/list/all"
  });
};

export default getDogFacts;
