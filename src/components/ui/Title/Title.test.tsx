import React from "react";
import { render } from "enzyme";
import { Title } from "@components";

describe("Title markup", () => {
    it("match snapshoot", () => {
        expect(render(<Title level={1}>Title</Title>)).toMatchSnapshot();
        expect(render(<Title level={2}>Title</Title>)).toMatchSnapshot();
        expect(render(<Title level={3}>Title</Title>)).toMatchSnapshot();
        expect(render(<Title level={4}>Title</Title>)).toMatchSnapshot();
    });
});
