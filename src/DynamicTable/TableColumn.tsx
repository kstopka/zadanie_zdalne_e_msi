import { FunctionComponent } from "react";

interface TableColumnProps {
    content: string;
}

const TableColumn: FunctionComponent<TableColumnProps> = ({ content }) => {
    return <div className="column">{content}</div>;
};

export default TableColumn;
