import {initialItemState, ItemReducer} from "../reducer/ItemReducer.ts";
import {createContext, useReducer} from "react";



export const ItemContext = createContext();

export function ItemProvider({children}) {
    const [items, dispatch] = useReducer(ItemReducer, initialItemState);

    return (
        <ItemContext.Provider value={[ items, dispatch ]}>
            {children}
        </ItemContext.Provider>
    );
}