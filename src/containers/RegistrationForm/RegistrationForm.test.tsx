import React from "react";
import { mount } from "enzyme";
import { RegistrationForm } from "@containers";

describe("markup", () => {
    it("match Snapshot", () => {
        expect(mount(<RegistrationForm />)).toMatchSnapshot();
    });
});
