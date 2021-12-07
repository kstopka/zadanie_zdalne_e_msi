import { FunctionComponent, useLayoutEffect } from "react";
import { StringListType } from "../App.d";
import { useResponseDataFromApi } from "../hooks/useResponseDataFromApi";
import TableRow from "../DynamicTable/TableRow";
import "../styles/Table.css";
import { CalculateTableWidth } from "../DynamicTable/CalculateTableWidth";
import { delegationInitialState } from "../Helpers/InitialStates";
import { mockedDataDelegation } from "../Helpers/fakeApi";

interface DelegationTableProps {}
const Loading = () => (
    <div className="loading">
        <h1>Loading...</h1>
    </div>
);

const DelegationTable: FunctionComponent<DelegationTableProps> = () => {
    const { imBusy, responseData, errorMessage, error } = useResponseDataFromApi(
        delegationInitialState,
        mockedDataDelegation
    );
    const rows = responseData.map((item: StringListType) => <TableRow key={item.id} row={item} />);
    useLayoutEffect(() => {
        CalculateTableWidth(".delegation-table");
    });
    return <div className="delegation-table table">{error ? errorMessage : rows}</div>;
};

export default DelegationTable;
