import { fetchApi } from "../Service/Api"



export const createNewUser = ( payload ) => {

    return async (dispatch ) => {
        try {
            dispatch({type: "CREATE_USER_LOADING"});
            const response = await fetchApi("/user/create", "POST", payload, 200);

          if (response.success){
            dispatch({type: "CREATE_USER_SUCCESS",
            token: response.token
             });
          }else {
             throw response;
          }

        } catch(error){
            dispatch({type: "CREATE_USER_FAIL",
            payload: error.responseBody
             });
        }
    }
}