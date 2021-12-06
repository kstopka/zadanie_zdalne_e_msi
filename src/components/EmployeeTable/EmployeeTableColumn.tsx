import * as React from "react";
import { FunctionComponent } from "react";

interface EmployeeTableColumnProps {
    content: string;
}

const EmployeeTableColumn: FunctionComponent<EmployeeTableColumnProps> = ({ content }) => {
    return <div className="column">{content}</div>;
};

export default EmployeeTableColumn;
