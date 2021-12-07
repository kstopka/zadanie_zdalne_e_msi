import { FunctionComponent, useLayoutEffect } from "react";
import { StringListType } from "../App.d";
import { useDelegationFromApi } from "../hooks/useDelegationFromApi";
import TableRow from "../DynamicTable/TableRow";
import "../styles/Table.css";
import { CalculateTableWidth } from "../DynamicTable/CalculateTableWidth";

interface DelegationTableProps {}
const Loading = () => (
    <div className="loading">
        <h1>Loading...</h1>
    </div>
);

const DelegationTable: FunctionComponent<DelegationTableProps> = () => {
    const { imBusy, delegation, errorMessage, error } = useDelegationFromApi();
    const rows = delegation.map((item: StringListType) => <TableRow key={item.id} row={item} />);
    useLayoutEffect(() => {
        CalculateTableWidth(".delegation-table");
    });
    return <div className="delegation-table table">{error ? errorMessage : rows}</div>;
};

export default DelegationTable;
