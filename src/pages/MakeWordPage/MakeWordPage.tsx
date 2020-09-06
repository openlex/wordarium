import * as React from "react";
import { WordListContainer } from "@containers";
import { MainTitle, PlayerAvatar } from "@components";
import { colors } from "@styles";

export class MakeWordPage extends React.Component {
    render() {
        return (
            <>
                <PlayerAvatar
                    size={100}
                    pic={
                        "https://image.freepik.com/free-vector/hand-drawn-style-bear-head-for-illustration-design-element_116205-88.jpg"
                    }
                    color={colors.red}
                />
                <MainTitle title="Вордариум" />
                <WordListContainer />
            </>
        );
    }
}
