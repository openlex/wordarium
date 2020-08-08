import React from "react";
import { WordList } from "@components";
import { withKnobs, object } from "@storybook/addon-knobs";
import { IWord } from "@types";

export default {
    title: "Спиок слов",
    component: WordList,
    decorators: [withKnobs()],
};

export const WordListView = () => {
    const defaultWordList: IWord[] = [
        {
            id: "a",
            value: "Дом",
        },
        {
            id: "b",
            value: "Калитка",
            isDifficult: true,
        },
    ];

    return <WordList wordList={object("Список слов", defaultWordList)} />;
};
