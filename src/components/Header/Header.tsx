import React from "react";
import { MainTitle, User } from "@components";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled, { CreateStyled } from "@emotion/styled";
import { colors } from "@styles";
jsx;

interface IHeader {
    styles?: CreateStyled;
    user?: string;
    onLogOut(): void;
}

const Wrapper = styled.div`
    background: ${colors.blue};
    padding: 10px;
    color: #fff;
    display: flex;
    justify-content: space-between;
`;

export const Header: React.FC<IHeader> = ({ user, onLogOut }: IHeader) => {
    return (
        <Wrapper>
            <MainTitle title="Вордариум" />
            {user && <User user={user} onClick={onLogOut} />}
        </Wrapper>
    );
};
