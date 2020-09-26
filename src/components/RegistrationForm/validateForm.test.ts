import { EFormError, validateForm } from "./validateForm";

describe("test validation", () => {
	// it("Required email", () => {
	// 	expect(validateForm({ email: "", name: "1" })).toStrictEqual({
	// 		email: EFormError.REQUIRED,
	// 	});
	// });
	//
	// it("Invalid email", () => {
	// 	expect(validateForm({ email: "qwe", name: "1" })).toStrictEqual({
	// 		email: EFormError.EMAIL,
	// 	});
	// });

	it("Required name", () => {
		expect(validateForm({ email: "op@mail.ru", name: "" })).toStrictEqual({
			name: EFormError.REQUIRED,
		});
	});
});
