import { IVatList, StringListType } from "../../App.d";
// import { VatList } from "../../data/VatList";

export const createVatList = (VatList: IVatList, vat: number) => {
    const { id, lp, description, mpk, nettoAmount, quantity } = VatList;

    const percentVat = (100 - vat) / 100;
    const bruttoAmount = nettoAmount * percentVat;
    const nettoValue = nettoAmount * quantity;
    const bruttoValue = bruttoAmount * quantity;

    const newObj: StringListType = {
        id,
        lp,
        description,
        mpk,
        nettoAmount: nettoAmount.toString(),
        quantity: quantity.toString(),
        vat: vat.toString(),
        bruttoAmount: bruttoAmount.toString(),
        nettoValue: nettoValue.toString(),
        bruttoValue: bruttoValue.toString(),
    };

    return newObj;
};
