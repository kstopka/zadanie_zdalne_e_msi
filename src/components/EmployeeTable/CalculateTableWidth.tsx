export const CalculateTableWidth = () => {
    const employeeTable: HTMLDivElement | null = document.querySelector(".employee-table");
    if (employeeTable === null) {
        return new Error("Employee Table does not exist");
    }

    const allDivsOfRowNL: NodeListOf<HTMLDivElement> = employeeTable.querySelectorAll("div.row");
    if (allDivsOfRowNL === null) {
        throw new Error("Rows of table do not exist");
    }
    const allDivsOfRow: HTMLDivElement[] = Array.from(allDivsOfRowNL);

    let widthColumns: number[] = [];

    for (let divOfRow of allDivsOfRow) {
        const allDivsOfColumnNL: NodeListOf<HTMLDivElement> = divOfRow.querySelectorAll("div.column");
        const allDivsOfColumn: HTMLDivElement[] = Array.from(allDivsOfColumnNL);
        const length = allDivsOfColumn.length;

        allDivsOfColumn.forEach((item, index) => {
            const widthOfColumn: number = item.clientWidth;
            if (widthColumns.length !== length) {
                widthColumns.push(widthOfColumn);
            }
            if (widthOfColumn > widthColumns[index]) {
                widthColumns[index] = widthOfColumn;
            }
        });
    }

    for (let divOfRow of allDivsOfRow) {
        const allDivsOfColumnNL: NodeListOf<HTMLDivElement> = divOfRow.querySelectorAll("div.column");
        const allDivsOfColumn: HTMLDivElement[] = Array.from(allDivsOfColumnNL);

        allDivsOfColumn.forEach((item, index) => {
            item.style.width = `${widthColumns[index]}px`;
        });
    }
};
