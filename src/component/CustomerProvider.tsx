// CustomerProvider.jsx
import { createContext, useReducer, ReactNode } from "react";
import { Customer } from "../model/Customer";

interface CustomerContextType {
    customers: Customer[];
    dispatch: React.Dispatch<{ type: string; payload: Customer }>;
}

export const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const initialState: Customer[] = [];

export function CustomerReducer(
    state = initialState,
    action: { type: string; payload: Customer }
): Customer[] {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return [...state, action.payload];
        default:
            return state;
    }
}

export function CustomerProvider({ children }: { children: ReactNode }) {
    const [customers, dispatch] = useReducer(CustomerReducer, initialState);

    return (
        <CustomerContext.Provider value={{ customers, dispatch }}>
            {children}
        </CustomerContext.Provider>
    );
}
