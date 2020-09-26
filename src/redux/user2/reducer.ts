import { createReducer } from "@reduxjs/toolkit";
import { addUser, addUser1, removeUser } from "./actions";
import { IUser } from "./types";

const initialUser: IUser = {
	name: "",
};

export const userReducer = createReducer<IUser>(initialUser, {
	[addUser1.type]: (state, user: IUser) => user,
	[addUser.fulfilled.type]: (state, user: IUser) => user,
	[removeUser.fulfilled.type]: (state) => {
		state = initialUser;

		return state;
	},

	// removeUser: () => ({
	// 	name: "",
	// }),
	// fetchCurrentUser: (state, action) => action,
});
