import React from "react";
import { LoadingScreen } from "@components/LoadingScreen/LoadingScreen";
import { shallow } from "enzyme";

describe("loading screen", () => {
    it("markup", () => {
        expect(shallow(<LoadingScreen />)).toMatchSnapshot();
    });
});
