import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import TableRow from "./DynamicTable/TableRow";
import { MainVatList } from "../data/VatList";
import "../styles/TableOfVat.css";
import { VatList } from "../data/VatList";
import { createVatList } from "./Helpers/CreateVatList";
import { CalculateTableWidth } from "./DynamicTable/CalculateTableWidth";
import { ChangeNettoBackgroundColor } from "./Helpers/ChangeNettoBackgroundColor";

interface TableOfVatProps {}

const TableOfVat: FunctionComponent<TableOfVatProps> = () => {
    const [vat, setVat] = useState(0);
    const AllVatList = VatList.map((item) => createVatList(item, vat));
    const concatArrays = MainVatList.concat(AllVatList);
    const rows = concatArrays.map((item, index) => <TableRow key={index} row={item} />);

    const handleVatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const numberVatValue: number = parseInt(value);
        setVat(numberVatValue);
    };

    useEffect(() => {
        CalculateTableWidth(".table-of-vat");
    });
    return (
        <div className="table-of-vat">
            <div className="vat">
                <label htmlFor="vat">Wybierz oprocentowanie VAT</label>
                <select name="vat" onChange={(e) => handleVatChange(e)}>
                    <option value="0">0</option>
                    <option value="3">3</option>
                    <option value="8">8</option>
                    <option value="23">23</option>
                </select>
                <div className="find-thousand">
                    <p>Netto powyżej 1000:</p>
                    <button onClick={ChangeNettoBackgroundColor}>Klik</button>
                </div>
            </div>
            {rows}
        </div>
    );
};

export default TableOfVat;
