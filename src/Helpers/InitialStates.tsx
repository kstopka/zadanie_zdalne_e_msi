import { InintialStateType } from "../App.d";

export const delegationInitialState: InintialStateType = {
    imBusy: false,
    responseData: [
        {
            id: "",
            lp: "",
            nameSurname: "",
            comingDate: "",
            leavingDate: "",
            comingLocation: "",
            leavingLocation: "",
        },
    ],
    errorMessage: "",
    error: false,
};
export const counterpartInitialState: InintialStateType = {
    imBusy: false,
    responseData: [
        {
            id: "",
            nip: "",
            regon: "",
            name: "",
            vat: "",
            street: "",
            homeNumber: "",
            apartmentNumber: "",
        },
    ],
    errorMessage: "",
    error: false,
};
