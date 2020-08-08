import React from "react";
import { WordListItem } from "@components";
import { IWord } from "@types";

export interface IWordListProps {
    wordList: IWord[];
}

export const WordList: React.FC<IWordListProps> = (props: IWordListProps) => (
    <ul>
        {props.wordList.map((wordListItem) => (
            <WordListItem
                key={wordListItem.id}
                value={wordListItem.value}
                isDifficult={wordListItem.isDifficult}
            />
        ))}
    </ul>
);
