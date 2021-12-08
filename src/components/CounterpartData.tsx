import { FunctionComponent, Key, useEffect, useLayoutEffect } from "react";
import { useResponseDataFromApi } from "../hooks/useResponseDataFromApi";
import { counterpartInitialState } from "../Helpers/InitialStates";
import { StringListType, CounterpartFormValues } from "../App.d";
import TableRow from "../DynamicTable/TableRow";
import { CalculateTableWidth } from "../DynamicTable/CalculateTableWidth";
import "../styles/Table.css";
import "../styles/Counterpart.css";
import { mockedDataCounterpart } from "../Helpers/fakeApi";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { renderError, CounterpartSchema } from "../Helpers/FormHelpers";
import { AddCounterpart } from "../Helpers/AddCounterpart";

interface CounterpartDataProps {}

const CounterpartData: FunctionComponent<CounterpartDataProps> = () => {
    const { imBusy, responseData, errorMessage, error } = useResponseDataFromApi(
        counterpartInitialState,
        mockedDataCounterpart
    );
    const handleEditClick = () => {};
    const handleDeleteClick = () => {};
    const rows = responseData.map((item: StringListType, index: Key) => (
        <div>
            <TableRow key={index} row={item} />
            <button onClick={handleEditClick}>edytuj</button>
            <button onClick={handleDeleteClick}>usun</button>
        </div>
    ));
    useLayoutEffect(() => {
        CalculateTableWidth(".counterpart-data");
    });

    useEffect(() => {}, []);

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
                validationSchema={CounterpartSchema}
                onSubmit={(values: CounterpartFormValues, { setSubmitting }: FormikHelpers<CounterpartFormValues>) => {
                    AddCounterpart(values, responseData);
                    // alert(JSON.stringify(values, null, 2));
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
