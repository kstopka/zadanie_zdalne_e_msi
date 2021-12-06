import { v4 as uuid } from "uuid";
import { EmployeeListType } from "../App.d";
export const MainEmployeeList: EmployeeListType[] = [
    {
        id: "ID",
        lp: "LP",
        name: "Imię",
        surname: "Nazwisko",
        position: "Stanowisko",
        dateOfEmployment: "Data zatrudnienia",
        vacationDays: "Ilość dni urlopowych",
    },
];
export const EmployeeList: EmployeeListType[] = [
    {
        id: uuid(),
        lp: "1",
        name: "Kazimierz",
        surname: "Szefler",
        position: "Kierowca",
        dateOfEmployment: "20.07.2015",
        vacationDays: "15",
    },
    {
        id: uuid(),
        lp: "2",
        name: "Janusz",
        surname: "Sroczyński",
        position: "Kierownik",
        dateOfEmployment: "06.06.2012",
        vacationDays: "20",
    },
    {
        id: uuid(),
        lp: "3",
        name: "Ryszard",
        surname: "Wlazło",
        position: "Pracownik",
        dateOfEmployment: "14.10.2010",
        vacationDays: "18",
    },
    {
        id: uuid(),
        lp: "4",
        name: "Sebastian",
        surname: "Kotulski",
        position: "Dyrektor",
        dateOfEmployment: "10.10.2010",
        vacationDays: "2",
    },
    {
        id: uuid(),
        lp: "5",
        name: "Bogdan",
        surname: "Kot",
        position: "Prezez",
        dateOfEmployment: "10.10.2010",
        vacationDays: "26",
    },
];
