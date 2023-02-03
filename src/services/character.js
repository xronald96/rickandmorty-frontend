const uri = 'http://localhost:8002/character';
const getCharacter = async (filter) => {
	const params = new URLSearchParams(filter);
	const url = process.env.SERVER_URI || uri;
	return await fetch(url + '/?' + params.toString()).then((ressult) => ressult.json());
};

const getCharacterById = async (id) => {
	const url = process.env.SERVER_URI || uri;
	return await fetch(url + `/${id}`).then((ressult) => ressult.json());
};

export { getCharacter, getCharacterById };
