import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { WordList, WordListItem } from "@components";
import { wordListMock } from "@mocks/wordList.mock";

describe("WordList markup", () => {
    let wordList: ShallowWrapper = {} as ShallowWrapper;

    beforeEach(() => {
        wordList = shallow(<WordList wordList={wordListMock} />);
    });

    it("Has same number of element as in array", () => {
        expect(wordList.find(WordListItem).length).toEqual(wordListMock.length);
    });

    it("match snapshoot", () => {
        expect(wordList).toMatchSnapshot();
    });
});
