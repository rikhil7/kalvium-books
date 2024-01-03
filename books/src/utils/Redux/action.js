import { FETCHING, SEARCH } from "./actionType";

export const fetchData = (books) => {
  return {
    type: FETCHING,
    payload: books,
  };
};
export const searchBooks = (query) => {
    console.log(query)
    return {
      type: SEARCH,
      payload: query,
    };
  };

