import { AnyAction, Dispatch } from "redux";
import { PayloadAction } from "@reduxjs/toolkit";

export const probabilityMiddleware = () => (next: Dispatch) => (
	action: PayloadAction
) => {
	const { probability } = action.payload?.meta || 0;
	if (probability >= Math.random()) {
		return next(action);
	}
};
