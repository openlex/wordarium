import React from "react";

export type IWordListItemProps = {
    value: string;
    isDifficult?: boolean;
    isActive?: boolean;
    onClick?(): void;
}

// вместо shouldComponentUpdate можно использовать
// export class WordListItem extends React.PureComponent<IWordListItemProps> {
export class WordListItem extends React.Component<IWordListItemProps> {

    shouldComponentUpdate(nextProps: Readonly<IWordListItemProps>): boolean {
        return nextProps.isActive !== this.props.isActive;
    }

    render() {
        const { value, isDifficult, isActive, onClick } = this.props;

        if (!value) {
            return null;
        }

        return (
            <li data-test-id={"item"} onClick={onClick}>
                {isActive && <span data-test-id="isActive"> `&gt; </span>}
                <span data-test-id="value">{value}</span>
                {isDifficult && <span data-test-id="isDifficult">*</span>}
            </li>
        );
    }
}
