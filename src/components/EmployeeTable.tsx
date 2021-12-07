import * as React from "react";
import { FunctionComponent, useLayoutEffect } from "react";
import { EmployeeList, MainEmployeeList } from "../data/EmployeeList";
import "../styles/Table.css";
import TableRow from "../DynamicTable/TableRow";
import { CalculateTableWidth } from "../DynamicTable/CalculateTableWidth";
import { ChangeRowsBackgroundColor } from "../Helpers/ChangeBackgroundColor";

interface EmployeeTableProps {}

const EmployeeTable: FunctionComponent<EmployeeTableProps> = () => {
    const concatArrays = MainEmployeeList.concat(EmployeeList);
    const rows = concatArrays.map((item, index) => <TableRow key={index} row={item} />);

    useLayoutEffect(() => {
        CalculateTableWidth(".employee-table");
    });
    return (
        <div className="employee-table table">
            {rows}
            <label htmlFor="color-odd">Wybierz kolor:</label>
            <input type="color" name="odd" onChange={ChangeRowsBackgroundColor} />
            <label htmlFor="color-even">Wybierz kolor:</label>
            <input type="color" name="even" onChange={ChangeRowsBackgroundColor} />
        </div>
    );
};

export default EmployeeTable;
