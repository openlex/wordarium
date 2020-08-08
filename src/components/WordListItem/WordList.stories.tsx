import React from "react";
import { WordListItem } from "@components";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

export default {
    title: "Слово из списка",
    component: WordListItem,
    decorators: [withKnobs()],
};

export const WordListItemView = () => {
    return (
        <WordListItem
            value={text("слово", "Крокодилище")}
            isDifficult={boolean("Является сложным", false)}
        />
    );
};
