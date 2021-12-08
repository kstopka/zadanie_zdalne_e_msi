import { CounterpartFormValues } from "../App.d";
import { v4 as uuid } from "uuid";
import path from "path";
import fs from "fs";

export const AddCounterpart = (values: CounterpartFormValues, responseData: any) => {
    const { nip, regon, name, vat, street, homeNumber, apartmentNumber } = values;

    const checkVAT = () => (vat ? "TAK" : "NIE");

    const newObj = {
        id: uuid(),
        nip: nip.toString(),
        regon: regon.toString(),
        name,
        vat: checkVAT(),
        street,
        homeNumber,
        apartmentNumber,
    };

    const concatDataWidthNewConterpart = responseData.concat(newObj);
    const cacheDir = path.resolve(__dirname, "data");
    console.log(path.join(cacheDir, `dataCounterpart.json`));

    new Promise((resolve, reject) => {
        fs.writeFile(
            path.join(cacheDir, `dataCounterpart.json`),
            JSON.stringify(concatDataWidthNewConterpart),
            (err) => {
                if (err) {
                    reject(err);
                }
            }
        );
    });

    // new Promise((resolve, reject) => {
    //     fs.writeFile(path.join(this.cacheDir, `${query}.json`), JSON.stringify(concatDataWidthNewConterpart), (err) => {
    //         if (err) {
    //             reject(err);
    //         }
    //     });
    // });
};
