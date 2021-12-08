import { FunctionComponent } from "react";
import { StringListType } from "../App.d";
import TableColumn from "./TableColumn";

interface TableRowProps {
    row: StringListType;
}

const TableRow: FunctionComponent<TableRowProps> = ({ row }) => {
    const changeObjectToArray = Object.values(row);
    changeObjectToArray.splice(0, 1);
    const columnContent = changeObjectToArray.map((item, index) => <TableColumn content={item} key={index} />);
    return <div className="row">{columnContent}</div>;
};

export default TableRow;
