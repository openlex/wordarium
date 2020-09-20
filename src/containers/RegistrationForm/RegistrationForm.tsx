import * as React from "react";
import { Form, Formik } from "formik";
import { css } from "@emotion/core";
import { FieldInput } from "@components/ui/FieldInput/FieldInput";
import styled from "@emotion/styled";
import { colors, mixinFlexCenter } from "@styles";
import { validateForm } from "./validateForm";
import { FormikHelpers } from "formik/dist/types";

interface IRegistrationFormFields {
    name: string;
    email: string;
}

const fieldCss = css`
    margin-bottom: 15px;
`;
const FormWrapper = styled.div`
    padding: 20px;
    border: solid 1px ${colors.gray};
    max-width: 300px;
    min-width: 200px;
    width: 80%;
    background: ${colors.white};
    ${mixinFlexCenter}
`;

export class RegistrationForm extends React.Component {
    onSubmit = (
        values: IRegistrationFormFields,
        formikHelpers: FormikHelpers<IRegistrationFormFields>
    ) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            formikHelpers.setSubmitting(false);
        }, 400);
    };

    render() {
        return (
            <FormWrapper>
                <Formik
                    initialValues={{ email: "", name: "" }}
                    validate={validateForm}
                    onSubmit={this.onSubmit}
                >
                    {(props) => {
                        return (
                            <Form>
                                <FieldInput
                                    cssStyle={fieldCss}
                                    label="Ваше имя"
                                    name="name"
                                    value={props.values.name}
                                    onChangeField={props.setFieldValue}
                                />
                                <FieldInput
                                    cssStyle={fieldCss}
                                    label="Вашa почта"
                                    name="email"
                                    value={props.values.email}
                                    onChangeField={props.setFieldValue}
                                />

                                <button
                                    data-test-id="submit-btn"
                                    type="submit"
                                    disabled={props.isSubmitting}
                                >
                                    Войти
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </FormWrapper>
        );
    }
}
