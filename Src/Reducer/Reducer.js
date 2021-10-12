import DEMO_TYPE from '../Type/Type';

const initialState = {
 loginData:{

 }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEMO_TYPE:
      return {
        ...state,
        loginData: action.payload,
      };
   

    default:
      return state;
  }
};

export default mainReducer;