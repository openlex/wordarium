import * as React from "react";
import { WordList } from "@components";
import { wordListMock } from "@mocks/wordList.mock";

export interface IWordListContainerProps {
    a: string
}

export interface IWordListContainerState {
    val: string;
}

export class WordListContainer extends React.Component<
    IWordListContainerProps,
    IWordListContainerState
> {
    state: IWordListContainerState = {
        val: "1",
    };

    render() {
        return <WordList wordList={wordListMock} />;
    }
}
