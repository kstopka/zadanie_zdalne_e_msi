import * as Yup from "yup";

export const renderError = (message: string) => <p className="error-message">{message}</p>;

export const CounterpartSchema = Yup.object({
    nip: Yup.string().length(10, "NIP musi zawierać dokładnie 10 liczb").required("NIP jest wymagany"),
    regon: Yup.string().length(9, "REGON musi zawierać dokładnie 9 liczb").required("REGON jest wymagany"),
    name: Yup.string().required("Nazwa jest wymagana"),
    street: Yup.string().required("Ulica jest wymagana"),
    homeNumber: Yup.string().required("Numer domu jest wymagany"),
});

export const ControlsSchema = Yup.object({
    nip: Yup.string().length(10, "NIP musi zawierać dokładnie 10 liczb").required("NIP jest wymagany"),
    regon: Yup.string().length(9, "REGON musi zawierać dokładnie 9 liczb").required("REGON jest wymagany"),
    name: Yup.string().required("Nazwa jest wymagana"),
    beginingDate: Yup.date().default(() => new Date()),
    street: Yup.string().required("Ulica jest wymagana"),
    homeNumber: Yup.string().required("Numer domu jest wymagany"),
    comments: Yup.string().max(160, "To pole może zawierać maksymalnie 160 znaków"),
});
