import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
const store = configureStore({
	reducer: {
		currentUser: userReducer,
	},
});
export default store;
