import React from "react";
import { ErrorScreenContainer, RegistrationForm } from "@containers";
import { MakeWordPage } from "@pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "@/ROUTES";
import { Header } from "@components";

export const App: React.FC = () => {
    return (
        <Router>
            <ErrorScreenContainer>
                <Header user="Alexei" onLogOut={() => 4} />
                <Switch>
                    <Route path={ROUTES.auth} component={RegistrationForm} />
                    <Route path={ROUTES.main} component={MakeWordPage} />
                </Switch>
            </ErrorScreenContainer>
        </Router>
    );
};
