import {
	userReducer,
	signIn,
	logOut,
	fetchCurrentUser,
	initialUser,
} from "@rdx";

describe("test user reducers", () => {
	const name = "Alex";
	const anyUser = {
		name: "Killmore",
		isLoading: false,
	};
	const pendingState = { isLoading: true, name: "" };
	const errorState = { isLoading: false, name: "error" };
	const enterPayload = { name };

	it("initial state", () => {
		const action = { type: "dummy_action" };

		expect(userReducer(undefined, action)).toEqual(initialUser);
	});

	it("signIn user pending", () => {
		expect(userReducer(initialUser, { type: signIn.pending.type })).toEqual(
			pendingState
		);
	});
	it("logOut user pending", () => {
		expect(userReducer(initialUser, { type: logOut.pending.type })).toEqual(
			pendingState
		);
	});
	it("fetch user pending", () => {
		expect(
			userReducer(initialUser, { type: fetchCurrentUser.pending.type })
		).toEqual(pendingState);
	});

	it("signIn user reject", () => {
		expect(
			userReducer(initialUser, { type: signIn.rejected.type })
		).toEqual(errorState);
	});

	it("logOut exist user reject", () => {
		expect(userReducer(anyUser, { type: logOut.rejected.type })).toEqual(
			errorState
		);
	});

	it("logOut no user reject", () => {
		expect(
			userReducer(initialUser, { type: logOut.rejected.type })
		).toEqual(errorState);
	});

	it("fetch user reject", () => {
		expect(
			userReducer(initialUser, { type: fetchCurrentUser.rejected.type })
		).toEqual(errorState);
	});

	it("signIn user success", () => {
		expect(
			userReducer(initialUser, {
				type: signIn.fulfilled.type,
				payload: enterPayload,
			})
		).toEqual({ name, isLoading: false });
	});

	it("signIn exist user success", () => {
		expect(
			userReducer(anyUser, {
				type: signIn.fulfilled.type,
				payload: enterPayload,
			})
		).toEqual({ name, isLoading: false });
	});

	it("logOut exist user success", () => {
		expect(
			userReducer(anyUser, {
				type: logOut.fulfilled.type,
				payload: enterPayload,
			})
		).toEqual(initialUser);
	});

	it("logOut no user success", () => {
		expect(
			userReducer(initialUser, {
				type: logOut.fulfilled.type,
				payload: enterPayload,
			})
		).toEqual(initialUser);
	});

	it("fetch user success", () => {
		expect(
			userReducer(initialUser, {
				type: fetchCurrentUser.fulfilled.type,
				payload: enterPayload,
			})
		).toEqual({ name, isLoading: false });
	});
});
