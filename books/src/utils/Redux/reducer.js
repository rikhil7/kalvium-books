//^ Making a reducer for implenting functionality of Redux Store
const defaultFormData = ()=>{
  if (localStorage.getItem("user-data")){
    return (JSON.parse(localStorage.getItem("user-data")))
  }else{
    return ({})
  }
}

const initialState={
    books:[],
    query:"",
    formData: defaultFormData()
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
    case "STORE_FORM_DATA":
        return{
            ...storeData,  formData: action.payload
        }
    default:
      return storeData;
  }
};
