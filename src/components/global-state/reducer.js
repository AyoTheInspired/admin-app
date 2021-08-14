export const initialState = {
	user: null,
	isAuth: false,
};

export const actionTypes = {
	SET_USER: "SET_USER",
	LOGOUT_USER: "LOGOUT_USER",
};

export const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.payload,
			};

		case actionTypes.LOGOUT_USER:
			return { ...state, user: null };

		default:
			return state;
	}
};

export default reducer;
