import { fetchApi } from "../Service/Api"



export const createNewUser = ( payload ) => {

    const response = fetchApi();

    return {
        type: "user",
        payload: "dfghjn"
    }
}