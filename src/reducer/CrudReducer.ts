import {Customer} from "../model/Customer.ts";

export  const initialState : Customer[] = [];
export  function CustomerReducer(
    state = initialState,action :{type:string,payload:Customer}){
    switch(action.type){
        case 'ADD_CUSTOMER':
            return [...state, action.payload];
        case "UPDATE_CUSTOMER":
            return state.map((customer) =>
                customer.email === action.payload.email
                    ? { ...customer, ...action.payload }
                    : customer
            );
        default:
            return state;
    }
}