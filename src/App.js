import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login';
import { PageNotFound } from './pages/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './pages/Register';
import { Character } from './pages/Character';
function App() {
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
