//^ Making a reducer for implenting functionality of Redux Store
const initialState={
    books:[],
    query:""
}

export const reducer = (storeData=initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...storeData,
        books: action.payload,
      };
    case "SEARCH":
        return{
            ...storeData,query:action.payload
        }
    default:
      return storeData;
  }
};
