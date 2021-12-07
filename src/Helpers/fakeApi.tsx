import { StringListType } from "../App.d";
import dataDelegation from "../data/dataDelegationTable.json";
import dataCounterpart from "../data/dataCounterpart.json";

export const mockedDataDelegation = (success: boolean, timeout?: number): Promise<StringListType[]> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(dataDelegation.delegation);
            }
            reject({ message: "Problem with API", error: true });
        }, timeout || 2000);
    });
export const mockedDataCounterpart = (success: boolean, timeout?: number): Promise<StringListType[]> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(dataCounterpart.counterpart);
            }
            reject({ message: "Problem with API", error: true });
        }, timeout || 2000);
    });
