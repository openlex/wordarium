import * as React from "react";
import { Form, Formik } from "formik";
import { validateEmail } from "@/utils";
import { css } from "@emotion/core";
import { FieldInput } from "@components/ui/FieldInput/FieldInput";
import styled from "@emotion/styled";
import { colors, mixinFlexCenter } from "@styles";

interface IRegistrationFormErrors {
    email?: string;
    name?: string;
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
    render() {
        return (
            <FormWrapper>
                <Formik
                    initialValues={{ email: "", name: "", avatar: "" }}
                    validate={(values) => {
                        const errors: IRegistrationFormErrors = {};

                        if (!values.email) {
                            errors.email = "Required";
                        } else if (!validateEmail(values.email)) {
                            errors.email = "Invalid email address";
                        }

                        if (!values.name) {
                            errors.name = "Required";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
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
