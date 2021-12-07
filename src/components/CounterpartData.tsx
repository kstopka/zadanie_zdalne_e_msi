import { FunctionComponent, Key, useLayoutEffect } from "react";
import { useResponseDataFromApi } from "../hooks/useResponseDataFromApi";
import { counterpartInitialState } from "../Helpers/InitialStates";
import { StringListType, CounterpartFormValues } from "../App.d";
import TableRow from "../DynamicTable/TableRow";
import { CalculateTableWidth } from "../DynamicTable/CalculateTableWidth";
import "../styles/Table.css";
import "../styles/Counterpart.css";
import { mockedDataCounterpart } from "../Helpers/fakeApi";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { idText } from "typescript";

interface CounterpartDataProps {}

const ControlsSchema = Yup.object({
    nip: Yup.string().length(10, "NIP musi zawierać dokładnie 10 liczb").required("NIP jest wymagany"),
    regon: Yup.string().length(9, "REGON musi zawierać dokładnie 9 liczb").required("REGON jest wymagany"),
    name: Yup.string().required("Nazwa jest wymagana"),
    street: Yup.string().required("Ulica jest wymagana"),
    homeNumber: Yup.string().required("Numer domu jest wymagany"),
});

const renderError = (message: string) => <p className="error-message">{message}</p>;

const CounterpartData: FunctionComponent<CounterpartDataProps> = () => {
    const { imBusy, responseData, errorMessage, error } = useResponseDataFromApi(
        counterpartInitialState,
        mockedDataCounterpart
    );
    const handleEditClick = () => {};
    const handleDeleteClick = () => {
        console.log(`ok`);
    };
    const rows = responseData.map((item: StringListType, index: Key) => (
        <div>
            <TableRow key={index} row={item} />
            <button onClick={handleEditClick}>edytuj</button>
            <button onClick={handleDeleteClick}>usun</button>
        </div>
    ));
    useLayoutEffect(() => {
        CalculateTableWidth(".counterpart-data");
        console.log(responseData);
    });
    // const handleSubmit = (e: { preventDefault: () => void }) => {
    //     e.preventDefault();
    // };

    return (
        <div className="counterpart-data table">
            <Formik
                initialValues={{
                    nip: NaN,
                    regon: NaN,
                    name: "",
                    vat: false,
                    street: "",
                    homeNumber: "",
                    apartmentNumber: "",
                }}
                validationSchema={ControlsSchema}
                onSubmit={(values: CounterpartFormValues, { setSubmitting }: FormikHelpers<CounterpartFormValues>) => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="nip">NIP</label>
                    <Field type="number" name="nip" />
                    <ErrorMessage name="nip" render={renderError} />

                    <label htmlFor="regon">REGON</label>
                    <Field type="number" name="regon" />
                    <ErrorMessage name="regon" render={renderError} />

                    <label htmlFor="name">Nazwa</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" render={renderError} />

                    <label htmlFor="vat">VAT</label>
                    <Field type="checkbox" name="vat" />

                    <label htmlFor="street">Ulica</label>
                    <Field type="text" name="street" />
                    <ErrorMessage name="street" render={renderError} />

                    <label htmlFor="homeNumber">Numer Domu</label>
                    <Field type="text" name="homeNumber" />
                    <ErrorMessage name="homeNumber" render={renderError} />

                    <label htmlFor="apartmentNumber">Numer Mieszkania</label>
                    <Field type="text" name="apartmentNumber" />

                    <div>
                        <button type="submit">Wyślij</button>
                    </div>
                </Form>
            </Formik>
            <div>{error ? errorMessage : rows}</div>
        </div>
    );
};

export default CounterpartData;
