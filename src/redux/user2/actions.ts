import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "@api";

export const addUser1 = createAction("user/add", (name: string) => ({
	payload: {
		name,
	},
}));

export const addUser = createAsyncThunk(
	"user/add",
	async (name: string, { dispatch }) => {
		await AuthApi.signIn(name);
		return dispatch(() => ({ name }));
	}
);

export const removeUser = createAsyncThunk("user/remove", async () => {
	await AuthApi.logOut();
});

export const fetchCurrentUser = createAsyncThunk(
	"user/fetchCurrentUser",
	async () => {
		const userName = await AuthApi.fetchUser();

		return {
			name: userName,
		};
	}
);
