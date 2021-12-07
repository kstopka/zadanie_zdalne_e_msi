import { useEffect, useReducer } from "react";
import { StringListType, DelegationInintialStateType } from "../App.d";
import mockedData from "../Helpers/fakeApi";

const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<StringListType[]>; (): any },
    {
        setForBusy,
        setForError,
        setForResponse,
    }: {
        setForBusy: any;
        setForError: any;
        setForResponse: any;
    }
) => {
    try {
        setForBusy();
        const placeholderData = await promiseWrapper();
        setForResponse(placeholderData);
    } catch ({ message, duringError }) {
        setForError(message);
    }
};

const initialState: DelegationInintialStateType = {
    imBusy: false,
    delegation: [
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

const delegationReducer = (state: any, action: { type: string; value?: string }) => {
    switch (action.type) {
        case "setBusy": {
            return {
                ...state,
                imBusy: true,
            };
        }
        case "setError": {
            return {
                ...state,
                imBusy: true,
                errorMessage: action.value,
                error: true,
            };
        }
        case "setDelegation": {
            return {
                ...state,
                imBusy: true,
                delegation: action.value,
            };
        }
    }
};

const setBusy =
    (dispatch: { (value: { type: string; value?: string | undefined }): void; (arg0: { type: string }): any }) => () =>
        dispatch({
            type: "setBusy",
        });

const setError =
    (dispatch: {
        (value: { type: string; value?: string | undefined }): void;
        (arg0: { type: string; value: any }): any;
    }) =>
    (payload: any) =>
        dispatch({
            type: "setError",
            value: payload,
        });
const setDelegation =
    (dispatch: {
        (value: { type: string; value?: string | undefined }): void;
        (arg0: { type: string; value: any }): any;
    }) =>
    (payload: any) =>
        dispatch({
            type: "setDelegation",
            value: payload,
        });

export const useDelegationFromApi = () => {
    const [state, dispatch] = useReducer(delegationReducer, initialState);
    const { imBusy, delegation, errorMessage, error } = state;

    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
                setForBusy: setBusy(dispatch),
                setForError: setError(dispatch),
                setForResponse: setDelegation(dispatch),
            });
        }
    });
    return { imBusy, delegation, errorMessage, error };
};
