import React from "react";
import { WordListItem } from "@components";
import { IWord } from "@types";

export interface IWordListProps {
    wordList: IWord[];
    onClick(id: string): void;
}

export const WordList: React.FC<IWordListProps> = (props: IWordListProps) => {
    return (
        <ul>
            {props.wordList.map((wordListItem) => {
                const onClick = () => {
                    props.onClick(wordListItem.id);
                };

                return (
                    <WordListItem
                        key={wordListItem.id}
                        onClick={onClick}
                        value={wordListItem.value}
                        isDifficult={wordListItem.isDifficult}
                        isActive={wordListItem.isActive}
                    />
                );
            })}
        </ul>
    );
};
