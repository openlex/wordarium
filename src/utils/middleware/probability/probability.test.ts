import { configureStore, createSlice } from "@reduxjs/toolkit";
import { probabilityMiddleware } from "@utils";

describe("test probability", () => {
	const initialState = { value: 0 };
	const slice = createSlice({
		name: "testProbability",
		initialState,
		reducers: {
			increment: {
				reducer: (state) => {
					state.value++;
				},
				prepare: () => ({
					payload: undefined,
					meta: { probability: ".5" },
				}),
			},
		},
	});
	const { increment } = slice.actions;
	const store = configureStore({
		reducer: slice.reducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(probabilityMiddleware),
	});

	it("test store", () => {
		// increment();
		store.dispatch(increment());
	});

	describe("test probability (no store)", () => {
		const action = {
			type: "TEST",
			meta: {
				probability: 0,
			},
		};

		it("100%", () => {
			action.meta.probability = 1;
			const result = probabilityMiddleware()(action);

			// expect(result).toEqual(action);
		});

		it("0%", () => {
			action.meta.probability = 0;
			const result = probabilityMiddleware()(action);

			// expect(result).toEqual(undefined);
		});
	});
});
