import * as React from "react";
import { FunctionComponent } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import "../views/Controls.css";

interface Values {
    NIP: number;
    REGON: number;
    name: string;
    beginingDate: Date;
    street: string;
    homeNumber: string;
    apartmentNumber: string;
    comments: string;
}

interface ControlsProps {}

const Controls: FunctionComponent<ControlsProps> = () => {
    const handleSubmit = () => {};
    return (
        <div className="controls">
            <Formik
                initialValues={{
                    NIP: 0,
                    REGON: 0,
                    name: "",
                    beginingDate: new Date(),
                    street: "",
                    homeNumber: "",
                    apartmentNumber: "",
                    comments: "",
                }}
                onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }}
            >
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="nip">NIP</label>
                    <Field type="number" name="nip" />
                    <label htmlFor="regon">REGON</label>
                    <Field type="number" name="regon" />
                    <label htmlFor="name">Nazwa</label>
                    <Field type="text" name="name" />
                    <label htmlFor="date">Data Powstania</label>
                    <Field type="date" name="date" />
                    <label htmlFor="street">Ulica</label>
                    <Field type="text" name="street" />
                    <label htmlFor="homeNumber">Numer Domu</label>
                    <Field type="text" name="homeNumber" />
                    <label htmlFor="apartmentNumber">Numer Mieszkania</label>
                    <Field type="text" name="apartmentNumber" />
                    <label htmlFor="comments">Uwagi</label>
                    <Field as="textarea" type="textarea" name="comments" cols="50" rows="10" />
                </Form>
            </Formik>
        </div>
    );
};

export default Controls;
