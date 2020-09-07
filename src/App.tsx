import React, { useCallback, useEffect, useState } from "react";
import { ErrorScreenContainer, RegistrationForm } from "@containers";
import { MakeWordPage } from "@pages";
import { Switch, Route, useLocation } from "react-router-dom";
import { ROUTES } from "@/ROUTES";
import { Header } from "@components";
import { AuthApi } from "@/api/Auth/Auth";
import { LoadingScreen } from "@components/LoadingScreen/LoadingScreen";

enum ERespStatus {
    PENDING = 0,
    FULFILL = 1,
    ERROR = 2,
}

export const App: React.FC = () => {
    const location = useLocation();
    const [user, setUser] = useState("");
    const [respStatus, setRespStatus] = useState<ERespStatus | null>(null);
    const onLogIn = useCallback(async (name: string) => {
        setRespStatus(ERespStatus.PENDING);
        try {
            await AuthApi.login(name);
            setRespStatus(ERespStatus.FULFILL);
            setUser(name);
        } catch (err) {
            setRespStatus(ERespStatus.ERROR);
        }
    }, []);
    const onLogOut = useCallback(async () => {
        setRespStatus(ERespStatus.PENDING);
        try {
            await AuthApi.logout();
            setRespStatus(ERespStatus.FULFILL);
            setUser("");
        } catch (err) {
            setRespStatus(ERespStatus.ERROR);
        }
    }, []);

    useEffect(() => {
        let isFetch = true;

        AuthApi.fetchUser().then((user) => {
            if (isFetch && user) {
                setUser(user);
            }
        });

        return () => {
            isFetch = false;
            setRespStatus(null);
        };
    }, [user, location.pathname]);

    return (
        <ErrorScreenContainer>
            <Header user={user} onLogOut={onLogOut} />
            {respStatus === ERespStatus.PENDING ? (
                <LoadingScreen />
            ) : (
                <Switch>
                    <Route
                        path={ROUTES.auth}
                        render={(props) => (
                            <RegistrationForm {...props} onLogIn={onLogIn} />
                        )}
                    />
                    <Route path={ROUTES.main} component={MakeWordPage} />
                </Switch>
            )}
        </ErrorScreenContainer>
    );
};
