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
export interface CounterpartFormValues {
    nip: number;
    regon: number;
    name: string;
    vat: boolean;
    street: string;
    homeNumber: string;
    apartmentNumber: string;
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

export type InintialStateType = {
    imBusy: boolean;
    responseData: StringListType[];
    errorMessage: string;
    error: boolean;
};

// export type CounterpartContextType = {
//     counterpart: StringListType[];
//     setToken: React.Dispatch<React.SetStateAction<boolean>>;
// };
