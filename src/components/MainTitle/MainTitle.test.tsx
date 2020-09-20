import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { MainTitle } from "@components";
import renderer from "react-test-renderer";

describe("WordListItem markup", () => {
    let title: ShallowWrapper = {} as ShallowWrapper;
    const textValue = "text";

    beforeEach(() => {
        title = shallow(<MainTitle title={textValue} />);
    });

    it("Same title as in props", () => {
        expect(title.find('[data-test-id="value"]').text()).toEqual(textValue);
    });

    it("match snapshoot", () => {
        expect(
            renderer.create(<MainTitle title={textValue} />).toJSON()
        ).toMatchSnapshot();
    });
});
