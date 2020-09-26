import { AnyAction, Dispatch } from "redux";

const thunk = () => <state>({
	dispatch,
	getState,
}: {
	dispatch: Dispatch;
	getState: () => state;
}) => (action: AnyAction | Function) => {
	if (typeof action === "function") {
		return action(dispatch, getState);
	}

	return action;
};

export const myThunk = thunk();
