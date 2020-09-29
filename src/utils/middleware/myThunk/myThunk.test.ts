import { myThunk } from "@utils";

describe("test myThunk middleware", () => {
	const dispatch = jest.fn();
	const getState = jest.fn();

	it("return function if func", () => {
		const action = jest.fn();

		myThunk({
			dispatch,
			getState,
		})(dispatch)(action);

		expect(action).toBeCalled();
	});
	it("return action if object", () => {
		const action = {
			type: "TEST",
			payload: {
				data: false,
			},
		};
		const thunk = myThunk({
			dispatch,
			getState,
		})(dispatch)(action);

		// expect(thunk).toEqual(action);
	});
});
