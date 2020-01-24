import { doRequest } from '../../../Request';

const getCatFacts = () => {
  return doRequest({
    path: '/facts'
  });
};

export default getCatFacts;
