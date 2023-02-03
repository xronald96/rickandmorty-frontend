import { CURRENT_USER, UPDATE_USER } from '../constants';

export function getCurrentUser() {
	return {
		type: CURRENT_USER,
	};
}

export function updateCurrentUser(user) {
	return {
		type: UPDATE_USER,
		user,
	};
}
