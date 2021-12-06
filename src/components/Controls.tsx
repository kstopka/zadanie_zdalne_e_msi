import * as React from "react";
import { FunctionComponent } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import "../views/Controls.css";
import { FormValues } from "../App.d";

interface ControlsProps {}

const ControlsSchema = Yup.object({
    nip: Yup.string().length(10, "NIP musi zawierać dokładnie 10 liczb").required("NIP jest wymagany"),
    regon: Yup.string().length(9, "REGON musi zawierać dokładnie 9 liczb").required("REGON jest wymagany"),
    name: Yup.string().required("Nazwa jest wymagana"),
    beginingDate: Yup.date().default(() => new Date()),
    street: Yup.string().required("Ulica jest wymagana"),
    homeNumber: Yup.string().required("Numer domu jest wymagany"),
    comments: Yup.string().max(160, "To pole może zawierać maksymalnie 160 znaków"),
});

const renderError = (message: string) => <p className="error-message">{message}</p>;

const Controls: FunctionComponent<ControlsProps> = () => {
    const handleSubmit = () => {};
    return (
        <div className="controls">
            <Formik
                initialValues={{
                    nip: NaN,
                    regon: NaN,
                    name: "",
                    beginingDate: new Date(),
                    street: "",
                    homeNumber: "",
                    apartmentNumber: "",
                    comments: "",
                }}
                validationSchema={ControlsSchema}
                onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }}
            >
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="nip">NIP</label>
                    <Field type="number" name="nip" />
                    <ErrorMessage name="nip" render={renderError} />

                    <label htmlFor="regon">REGON</label>
                    <Field type="number" name="regon" />
                    <ErrorMessage name="regon" render={renderError} />

                    <label htmlFor="name">Nazwa</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" render={renderError} />

                    <label htmlFor="date">Data Powstania</label>
                    <Field type="date" name="date" />
                    <ErrorMessage name="date" render={renderError} />

                    <label htmlFor="street">Ulica</label>
                    <Field type="text" name="street" />
                    <ErrorMessage name="street" render={renderError} />

                    <label htmlFor="homeNumber">Numer Domu</label>
                    <Field type="text" name="homeNumber" />
                    <ErrorMessage name="homeNumber" render={renderError} />

                    <label htmlFor="apartmentNumber">Numer Mieszkania</label>
                    <Field type="text" name="apartmentNumber" />

                    <label htmlFor="comments">Uwagi</label>
                    <Field as="textarea" type="textarea" name="comments" cols="50" rows="5" />
                    <ErrorMessage name="comments" render={renderError} />

                    <label htmlFor="color">Wybierz kolor:</label>
                    <Field as="select" name="color">
                        <option value="zielony">Zielony</option>
                        <option value="niebieski">Niebieski</option>
                        <option value="szary">Szary</option>
                        <option value="turkusowy">Turkusowy</option>
                        <option value="granatowy">Granatowy</option>
                        <option value="czerwony">Czerwony</option>
                        <option value="bialy">Biały</option>
                    </Field>

                    <label htmlFor="color">Wybierz VAT:</label>
                    <Field as="select" name="color">
                        <option value="vat_zw">ZW</option>
                        <option value="vat_np">NP.</option>
                        <option value="vat_0">0%</option>
                        <option value="vat_3">3%</option>
                        <option value="vat_8">8%</option>
                        <option value="vat_23">23%</option>
                    </Field>
                    <div>
                        <button type="submit">Wyślij</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Controls;
