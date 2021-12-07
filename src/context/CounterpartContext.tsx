// import * as React from "react";
// import { createContext, useState,useReducer } from "react";
// import { CounterpartContextType } from "../App.d";

// export const CounterpartContext = createContext<CounterpartContextType>({
//     counterpart: [
//         {
//             id: "ID",
//             nip: "NIP",
//             regon: "REGON",
//             name: "Nazwa",
//             vat: "Czy płatnik VAT?",
//             street: "Ulica",
//             homeNumber: "Numer domu",
//             apartmentNumber: "Numer mieszkania",
//         },
//     ],
//     setToken: () => {},
// });

// export const TokenProvider = ({ children }: { children: any }) => {
//     const [counterpart, setCounterpart] = useReducer();

//     return (
//         <CounterpartContext.Provider value={{ counterpart, setCounterpart }}>{children}</CounterpartContext.Provider>
//     );
// };
