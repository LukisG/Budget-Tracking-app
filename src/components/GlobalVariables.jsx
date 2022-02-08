import { createContext } from 'react';
const total = {
    budget: 0,
    pajamos: 0,
    islaidos: 0,
    total: 0,
    food: 0,
    transport: 0,
    entertainment: 0,
    rent: 0,
    gifts: 0,
    nocategory: 0, 
    history: [],
    historypreset:[  ["name", "spend/gain", ""] ],
}
export const GlobalTotal = createContext(total);
