import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { WordListItem } from "@components";

describe("WordListItem markup", () => {
    let wordListItem: ShallowWrapper = {} as ShallowWrapper;
    const textValue = "text";
    // const id = 'id';

    beforeEach(() => {
        wordListItem = shallow(<WordListItem value={textValue} />);
    });

    it("Same text as in props", () => {
        expect(wordListItem.find('[data-test-id="value"]').text()).toEqual(
            textValue
        );
    });

    it("Has difficult marker if isDifficult props", () => {
        wordListItem.setProps({ isDifficult: true });
        expect(
            wordListItem.find('[data-test-id="isDifficult"]').length
        ).toEqual(1);
    });

    it("Has NOT difficult marker if isDifficult props", () => {
        wordListItem.setProps({ isDifficult: false });
        expect(
            wordListItem.find('[data-test-id="isDifficult"]').length
        ).toEqual(0);
    });

    it("return NULL if VALUE is empty", () => {
        wordListItem.setProps({ value: "" });
        expect(wordListItem.type()).toEqual(null);
    });

    it("match snapshoot", () => {
        expect(wordListItem).toMatchSnapshot();
    });
});
