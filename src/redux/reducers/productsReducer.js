import { typeProducts } from "../types/types";

const initialState = []

export const authReducer = ( state= initialState, action) => {
  switch(action.type){
    case typeProducts.add: 
      return initialState
      
      case typeProducts.delete:  
      return initialState;

    default:
      return state;
  }
}