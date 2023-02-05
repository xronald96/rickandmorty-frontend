import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login';
import { PageNotFound } from './pages/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './pages/Register';
import { Character } from './pages/Character';
import { useDispatch } from 'react-redux';
import { updateCurrentUser } from './redux/actions/user';
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		if (sessionStorage.getItem('currentUser'))
			dispatch(updateCurrentUser(JSON.parse(sessionStorage.getItem('currentUser'))));
	}, []);
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Navigate to={'/login'} />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/character',
			element: <Character />,
		},
		{
			path: '/register',
			element: <Register />,
		},
		{
			path: '/*',
			element: <PageNotFound />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
