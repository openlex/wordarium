import * as React from "react";
import { WordListContainer } from "@containers";
import { MainTitle } from "@components";

export interface IMakeWordProps {}

export interface IMakeWordState {}

export class MakeWordPage extends React.Component<
    IMakeWordProps,
    IMakeWordState
> {
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
