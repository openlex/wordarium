import React from "react";
import { ErrorScreenContainer, RegistrationForm } from "@containers";
import { MakeWordPage } from "@pages";

export const App: React.FC<{}> = () => {
    return (
        <ErrorScreenContainer>
            <MakeWordPage />
            <RegistrationForm />
        </ErrorScreenContainer>
    );
};
