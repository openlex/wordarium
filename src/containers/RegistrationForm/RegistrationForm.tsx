import * as React from "react";
import { Form, Formik } from "formik";
import { css } from "@emotion/core";
import { FieldInput } from "@components/ui/FieldInput/FieldInput";
import styled from "@emotion/styled";
import { colors, mixinFlexCenter } from "@styles";
import { Title } from "@components";
import { ROUTES } from "@/ROUTES";
import { RouteComponentProps } from "react-router-dom";

interface IRegistrationProps extends RouteComponentProps {
	onLogIn(name: string): void;
}

interface IRegistrationFormErrors {
	email?: string;
	name?: string;
}

const fieldCss = css`
	margin-bottom: 15px;
`;
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
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

const HeaderTitle = styled(Title)`
	margin-bottom: 10px;
`;

export class RegistrationForm extends React.Component<IRegistrationProps> {
	render() {
		return (
			<Wrapper>
				<HeaderTitle level={3}>Авторизуйтесь</HeaderTitle>
				<FormWrapper>
					<Formik
						initialValues={{ name: "" }}
						validate={(values) => {
							const errors: IRegistrationFormErrors = {};

							if (!values.name) {
								errors.name = "Required";
							}

							return errors;
						}}
						onSubmit={async ({ name }) => {
							await this.props.onLogIn(name);
							this.props.history.push(ROUTES.main);
						}}
					>
						{(props) => {
							return (
								<Form
									data-test-id="form"
									onSubmit={props.handleSubmit}
								>
									<FieldInput
										cssStyle={fieldCss}
										label="Ваше имя"
										name="name"
										value={props.values.name}
										onChangeField={props.setFieldValue}
										data-test-id="name-input"
									/>

									<button
										type="submit"
										disabled={props.isSubmitting}
										data-test-id="submit-btn"
									>
										Войти
									</button>
								</Form>
							);
						}}
					</Formik>
				</FormWrapper>
			</Wrapper>
		);
	}
}
