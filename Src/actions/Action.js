import axios from "axios";
import {DEMO_TYPE} from '../Type/Type'

 const fetchData = (LoginData) => ({
    type: DEMO_TYPE,
    payload:LoginData
  });

  export const userLogin = (UserData) => {
    return async (dispatch)=> {
        const LoginData={
            email:UserData.email,
            password:UserData.password
        }
        await axios.post('https://quiet-harbor-07900.herokuapp.com/developer.login#/login/post_DeveloperSignin',LoginData)
        .then((response) => {
            const userData = response.data;
            console.log(userData);
    
            dispatch(fetchData(userData));
          })
    
          .catch((error) => {
            console.log(error);
          });
    }
  }
