export interface FormValues {
    nip: number;
    regon: number;
    name: string;
    beginingDate: Date;
    street: string;
    homeNumber: string;
    apartmentNumber: string;
    comments: string;
}

export interface StringListType {
    [key: string]: string;
}

export interface IVatList {
    id: string;
    lp: string;
    description: string;
    mpk: string;
    nettoAmount: number;
    quantity: number;
}

export type DelegationInintialStateType = {
    imBusy: boolean;
    delegation: StringListType[];
    errorMessage: string;
    error: boolean;
};
