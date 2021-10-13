import { fetchApi } from "../Service/Api"



export const createNewUser = ( payload ) => {

    return async (dispatch ) => {
        try {
            const response = await fetchApi("/user/create", "POST", payload, 200);
        } catch(e){

        }
    }
}