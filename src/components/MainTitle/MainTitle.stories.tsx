import React from "react";
import { MainTitle } from "@components";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: "Заголовок",
    component: MainTitle,
    decorators: [withKnobs()],
};

export const WordListItemView = () => {
    return <MainTitle title={text("слово", "Wordarium")} />;
};
