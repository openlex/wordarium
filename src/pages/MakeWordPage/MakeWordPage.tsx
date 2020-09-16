import * as React from "react";
import { WordListContainer } from "@containers";
import { MainTitle } from "@components";

export interface IMakeWordState {}

export class MakeWordPage extends React.Component<{}, {}> {
    state: IMakeWordState = {};

    render() {
        return (
            <>
                <MainTitle title="Вордариум" />
                <WordListContainer />
            </>
        );
    }
}
