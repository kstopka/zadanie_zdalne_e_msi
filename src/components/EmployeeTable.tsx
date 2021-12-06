import * as React from "react";
import { FunctionComponent, useLayoutEffect } from "react";
import { EmployeeList, MainEmployeeList } from "../data/EmployeeList";
import "../styles/EmployeeTable.css";
import EmployeeTableRow from "./EmployeeTable/EmployeeTableRow";
import { CalculateTableWidth } from "./EmployeeTable/CalculateTableWidth";
import { ChangeBackgroundColor } from "./EmployeeTable/ChangeBackgroundColor";

interface EmployeeTableProps {}

const EmployeeTable: FunctionComponent<EmployeeTableProps> = () => {
    const concatArrays = MainEmployeeList.concat(EmployeeList);
    const rows = concatArrays.map((item, index) => <EmployeeTableRow key={index} row={item} />);

    useLayoutEffect(() => {
        CalculateTableWidth();
    });
    return (
        <div className="employee-table">
            {rows}
            <label htmlFor="color-odd">Wybierz kolor:</label>
            <input type="color" name="odd" onChange={ChangeBackgroundColor} />
            <label htmlFor="color-even">Wybierz kolor:</label>
            <input type="color" name="even" onChange={ChangeBackgroundColor} />
        </div>
    );
};

export default EmployeeTable;
