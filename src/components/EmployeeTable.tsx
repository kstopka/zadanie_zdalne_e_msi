import * as React from "react";
import { FunctionComponent } from "react";

interface EmployeeTableProps {}

const EmployeeTable: FunctionComponent<EmployeeTableProps> = () => {
    return (
        <div className="employee-table">
            <h1>Employee Table</h1>
        </div>
    );
};

export default EmployeeTable;
