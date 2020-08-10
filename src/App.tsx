import React from "react";
import { ErrorScreenContainer } from "@containers";
import { MakeWordPage } from "@pages";

export const App: React.FC<{}> = () => {
    return (
        <ErrorScreenContainer>
            <MakeWordPage />
        </ErrorScreenContainer>
    );
};
