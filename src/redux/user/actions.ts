import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "@api";
import { IUser } from "./types";

// export const userLoading = createAction("user/loading");
export const addUser = createAction<IUser>("user/add");
// export const removeUser = createAction("user/remove");
// export const userError = createAction("user/error");

export const signIn = createAsyncThunk(
	"user/signIn",
	async (name: string, { dispatch }) => {
		await AuthApi.signIn(name);
		return { name };
	}
);

export const logOut = createAsyncThunk("user/logOut", async () => {
	await AuthApi.logOut();
});

export const fetchCurrentUser = createAsyncThunk(
	"user/fetchCurrentUser",
	async (undefined, { dispatch }) => {
		const user = await AuthApi.fetchUser();
		return dispatch(() => ({ name: user.name }));
	}
);
