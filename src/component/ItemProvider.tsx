import {initialItemState, ItemReducer} from "../reducer/ItemReducer.ts";
import {createContext, ReactNode, useReducer} from "react";
import {Item} from "../model/Item.ts";

interface ItemContextType {
    items: Item[];
    dispatch: React.Dispatch<{ type: string; payload: Item }>;
}

export const ItemContext = createContext<ItemContextType | undefined>(undefined);

export function ItemProvider({ children }: { children: ReactNode }) {
    const [items, dispatch] = useReducer(ItemReducer, initialItemState);

    return (
        <ItemContext.Provider value={{ items, dispatch }}>
            {children}
        </ItemContext.Provider>
    );
}