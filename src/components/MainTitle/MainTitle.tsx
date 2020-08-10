import React from "react";

export interface IMainTitleProps {
    title: string;
}

export const MainTitle: React.FC<IMainTitleProps> = (
    props: IMainTitleProps
) => {
    const { title } = props;

    if (!title) {
        return null;
    }

    return <h1 data-test-id="value">{title}</h1>;
};
