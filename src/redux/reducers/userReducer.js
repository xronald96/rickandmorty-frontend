import { CURRENT_USER, UPDATE_USER } from '../constants';
const initialState = null;
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return action.user;
		case CURRENT_USER:
			return {
				...state,
			};
		default:
			return state;
	}
};
export default userReducer;
