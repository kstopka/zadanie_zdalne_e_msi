import { useEffect, useReducer } from "react";
import { InintialStateType, StringListType } from "../App.d";
// import mockedDataDelegation from "../Helpers/fakeApi";

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

const reducer = (state: any, action: { type: string; value?: string }) => {
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
        case "setResponseData": {
            return {
                ...state,
                imBusy: true,
                responseData: action.value,
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
const setResponseData =
    (dispatch: {
        (value: { type: string; value?: string | undefined }): void;
        (arg0: { type: string; value: any }): any;
    }) =>
    (payload: any) =>
        dispatch({
            type: "setResponseData",
            value: payload,
        });

export const useResponseDataFromApi = (initialState: InintialStateType, mockedDataDelegation: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { imBusy, responseData, errorMessage, error } = state;

    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedDataDelegation(true), {
                setForBusy: setBusy(dispatch),
                setForError: setError(dispatch),
                setForResponse: setResponseData(dispatch),
            });
        }
    });
    return { imBusy, responseData, errorMessage, error };
};
