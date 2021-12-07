export const ChangeNettoBackgroundColor = () => {
    const vatTable: HTMLDivElement | null = document.querySelector(".table-of-vat");
    if (vatTable === null) {
        return new Error("Vat Table does not exist");
    }

    const allDivsOfRowNL: NodeListOf<HTMLDivElement> = vatTable.querySelectorAll("div.row");
    if (allDivsOfRowNL === null) {
        throw new Error("Rows of table do not exist");
    }
    const allDivsOfRow: HTMLDivElement[] = Array.from(allDivsOfRowNL);
    allDivsOfRow.splice(0, 1);

    for (let row of allDivsOfRow) {
        const columnsNL: NodeListOf<HTMLDivElement> = row.querySelectorAll("div.column");
        if (columnsNL === null) {
            throw new Error("Columns of table do not exist");
        }
        const columns = Array.from(columnsNL);
        const stringOfNetto = columns[3].innerHTML;
        const valueOfNetto = parseInt(stringOfNetto);
        if (valueOfNetto > 1000) {
            console.log(`ok`);
            columns[3].classList.toggle("active");
        }
    }
};
