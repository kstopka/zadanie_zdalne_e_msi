import { StringListType } from "../App.d";
import dataDelegation from "../data/dataDelegationTable.json";

const mockedData = (success: boolean, timeout?: number): Promise<StringListType[]> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(dataDelegation.delegation);
            }
            reject({ message: "Problem with API", error: true });
        }, timeout || 2000);
    });

export default mockedData;
