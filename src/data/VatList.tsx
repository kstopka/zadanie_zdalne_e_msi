import { v4 as uuid } from "uuid";
import { StringListType, IVatList } from "../App.d";
export const MainVatList: StringListType[] = [
    {
        id: "ID",
        lp: "LP",
        description: "Opis",
        mpk: "MPK",
        nettoAmount: "Kwota Netto",
        quantity: "Ilość",
        vat: "VAT",
        bruttoAmount: "Kwota Brutto",
        nettoValue: "Wartość Netto",
        bruttoValue: "Wartość Brutto",
    },
];

export const VatList: IVatList[] = [
    {
        id: uuid(),
        lp: "1",
        description: "Przykładowy pierwszy opis",
        mpk: "Placówka A",
        nettoAmount: 500,
        quantity: 10,
    },
    {
        id: uuid(),
        lp: "2",
        description: "Przykładowy drugi opis",
        mpk: "Placówka B",
        nettoAmount: 8000,
        quantity: 23,
    },
    {
        id: uuid(),
        lp: "3",
        description: "Przykładowy trzeci opis",
        mpk: "Placówka C",
        nettoAmount: 900,
        quantity: 7,
    },
    {
        id: uuid(),
        lp: "4",
        description: "Przykładowy czwarty opis",
        mpk: "Placówka D",
        nettoAmount: 1250,
        quantity: 11,
    },
    {
        id: uuid(),
        lp: "5",
        description: "Przykładowy piąty opis",
        mpk: "Placówka E",
        nettoAmount: 720,
        quantity: 50,
    },
];
