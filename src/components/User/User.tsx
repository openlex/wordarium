import React from "react";
import styled, { CreateStyled } from "@emotion/styled";
import { MixinFuncTextEllipse } from "@styles";

interface IUser {
    styles?: CreateStyled;
    user: string;
    onClick(): void;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const UserName = styled.div`
    ${MixinFuncTextEllipse({ maxWidth: 120 })}
    margin-right: 10px;
    font-size: 16px;
`;

export const User: React.FC<IUser> = ({ user, onClick }: IUser) => {
    return (
        <Wrapper>
            <UserName>{user}</UserName>
            <button onClick={onClick}>Выйти</button>
        </Wrapper>
    );
};
