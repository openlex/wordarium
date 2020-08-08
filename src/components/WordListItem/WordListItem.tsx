import React from "react";
import { IWord } from "@types";

export type wordListItemProps = Omit<IWord, "id">;

export const WordListItem: React.FC<wordListItemProps> = (
    props: wordListItemProps
) => {
    const { value, isDifficult } = props;

    if (!value) {
        return null;
    }

    return (
        <li data-test-id={"item"}>
            <span data-test-id="value">{value}</span>
            {isDifficult && <span data-test-id="isDifficult">*</span>}
        </li>
    );
};
