import * as React from "react";
import { FunctionComponent } from "react";
import { EmployeeListType } from "../../App.d";
import EmployeeTableColumn from "./EmployeeTableColumn";

interface EmployeeTableRowProps {
    row: EmployeeListType;
}

const EmployeeTableRow: FunctionComponent<EmployeeTableRowProps> = ({ row }) => {
    const changeObjectToArray = Object.values(row);
    changeObjectToArray.splice(0, 1);
    const columnContent = changeObjectToArray.map((item, index) => <EmployeeTableColumn content={item} key={index} />);
    return <div className="row">{columnContent}</div>;
};

export default EmployeeTableRow;
