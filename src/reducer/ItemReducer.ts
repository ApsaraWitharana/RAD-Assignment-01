import { Item } from "../model/Item.ts";

export const initialItemState: Item[] = [];

export function ItemReducer(
    state = initialItemState,
    action: { type: string; payload: Item }
): Item[] {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];
        case "UPDATE_ITEM":
            return state.map((item) =>
                item.code === action.payload.code ? { ...item, ...action.payload } : item
            );
        case "DELETE_ITEM":
            return state.filter((item) => item.code !== action.payload.code);
        default:
            return state;
    }
}