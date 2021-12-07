export const ChangeBackgroundColor = (e: { target: { value: any; name: any } }) => {
    const employeeTable: HTMLDivElement | null = document.querySelector(".employee-table");
    if (employeeTable === null) {
        return new Error("Employee Table does not exist");
    }

    const allDivsOfRowNL: NodeListOf<HTMLDivElement> = employeeTable.querySelectorAll("div.row");
    if (allDivsOfRowNL === null) {
        throw new Error("Rows of table do not exist");
    }
    const allDivsOfRow: HTMLDivElement[] = Array.from(allDivsOfRowNL);
    const oddRows: HTMLDivElement[] = allDivsOfRow.filter((element, index) => index % 2 === 0);
    const evenRows: HTMLDivElement[] = allDivsOfRow.filter((element, index) => index % 2 !== 0);

    const { value, name } = e.target;

    if (name === "odd") {
        for (let row of oddRows) {
            row.style.backgroundColor = value;
        }
    } else if (name === "even") {
        for (let row of evenRows) {
            row.style.backgroundColor = value;
        }
    }
};
