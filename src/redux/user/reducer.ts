import { createReducer } from "@reduxjs/toolkit";
import { fetchCurrentUser, logOut, signIn } from "./actions";
import { IUser } from "./types";

const initialUser: IUser = {
	name: "",
};

export const userReducer = createReducer<IUser>(initialUser, {
	[signIn.pending.type ||
	logOut.pending.type ||
	fetchCurrentUser.pending.type]: (state) => {
		state.isLoading = true;
	},

	[signIn.rejected.type ||
	logOut.rejected.type ||
	fetchCurrentUser.rejected.type]: (state) => {
		state.name = "error";
		state.isLoading = false;
	},

	[signIn.fulfilled.type]: (state, action) => {
		state.name = action.payload.name;
		state.isLoading = false;
	},

	[logOut.fulfilled.type]: (state) => {
		state.name = "";
		state.isLoading = false;
	},

	[fetchCurrentUser.fulfilled.type]: (state, action) => {
		state.name = action.payload.name;
		state.isLoading = false;
	},
});
