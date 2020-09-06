import React from "react";
import { ErrorScreenContainer } from "@containers";
import { MakeWordPage } from "@pages";
import { RegistrationForm } from "@containers/RegistrationForm/RegistrationForm";

export const App: React.FC<{}> = () => {
    return (
        <ErrorScreenContainer>
            <MakeWordPage />
            <RegistrationForm />
        </ErrorScreenContainer>
    );
};
