const uri = 'http://localhost:8002/user';
const loginRequest = async (credentials) => {
	return await fetch('http://localhost:8002/login', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((ressult) => ressult.json());
};

const createUserRequest = async (newUser) => {
	return await fetch(uri, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	}).then((ressult) => ressult.json());
};

export { loginRequest, createUserRequest };
