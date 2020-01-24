import axios from "axios";

const API = "https://dog.ceo/";

interface IRequestOptions {
  path: string;
}

export const doRequest = async ({ path }: IRequestOptions): Promise<any> => {
  return axios.get(API + path);
};

export default doRequest;
