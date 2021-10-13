import { combineReducers } from "redux";


const createUser = (state = {}, action) => {  
       switch (action.type) {
           case "CREATE_USER_LOADING":
               
              return {
                    isLoading: true,
                    token: null,
                    isError: false,
                    isSuccess: false,
                    errors: null
              }
            case "CREATE_USER_SUCCESS":
                 return {
                    isLoading: false,
                    token: action.token,
                    isError: false,
                    isSuccess: true,
                    errors: null
                 }  
             case "CREATE_USER_SFAIL":
                 return {
                     isLoading: false,
                     token: action.token,
                     isError: true,
                     isSuccess: false,
                     errors: action.payload
                    }     
       
           default:
               return state;
       }
}

export default combineReducers({
    createUser
});