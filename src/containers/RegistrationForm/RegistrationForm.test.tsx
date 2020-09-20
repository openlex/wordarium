import React from "react";
import { mount } from "enzyme";
import { RegistrationForm } from "@containers";

describe("test form", () => {
    it("match Snapshot", () => {
        expect(mount(<RegistrationForm />)).toMatchSnapshot();
    });
});
