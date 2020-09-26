import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrentUser, logOut, signIn } from "./actions";
import { IUser } from "./types";

export const initialUser: IUser = {
	name: "",
	isLoading: false,
};

type UserPayloadActionType = PayloadAction<{ name: string }>;

const isPendingActions = (action: {
	type: string;
}): action is UserPayloadActionType => {
	return /^(user\/).*(\/pending)$/.test(action.type);
};
const isRejectActions = (action: {
	type: string;
}): action is UserPayloadActionType => {
	return /^(user\/).*(\/rejected)$/.test(action.type);
};

export const userReducer = createReducer<IUser>(
	initialUser,
	{
		[signIn.fulfilled.type]: (state, action) => {
			state.name = action.payload.name;
			state.isLoading = false;
		},

		[logOut.fulfilled.type]: () => initialUser,

		[fetchCurrentUser.fulfilled.type]: (state, action) => {
			state.name = action.payload.name;
			state.isLoading = false;
		},
	},
	[
		{
			matcher: isPendingActions,
			reducer: (state) => {
				state.isLoading = true;
			},
		},
		{
			matcher: isRejectActions,
			reducer: (state) => {
				state.name = "error";
				state.isLoading = false;
			},
		},
	]
);
