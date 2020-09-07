import React from "react";
import styled, { CreateStyled } from "@emotion/styled";

export interface ITitleProps {
    level: number;
    styles?: CreateStyled;
    children: React.ReactNode;
}

export const Title: React.FC<ITitleProps> = ({
    styles,
    level,
    children,
}: ITitleProps) => {
    const Title1 = styled.h1`
        ${styles}
        font-size: 22px;
        color: blue;
        font-weight: bold;
    `;
    const Title2 = styled.h2`
        ${styles}
        font-size: 18px;
        font-weight: normal;
    `;
    const Title3 = styled.h3`
        ${styles}
        font-size: 16px;
        font-weight: normal;
    `;
    const Title4 = styled.h4`
        ${styles}
        font-size: 14px;
    `;

    switch (level) {
        case 1:
        default:
            return <Title1>{children}</Title1>;
        case 2:
            return <Title2>{children}</Title2>;
        case 3:
            return <Title3>{children}</Title3>;
        case 4:
            return <Title4>{children}</Title4>;
    }
};
