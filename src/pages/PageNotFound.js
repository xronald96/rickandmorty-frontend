import style from 'styled-components';
const Container = style.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
    color: red;
    font-size: 80px;
    font-weight: bold;
    background-image: url("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
`;

export const PageNotFound = () => {
	return (
		<Container>
			<div style={{ padding: 24, borderRadius: '8px', background: 'white' }}>
				PAGE NOT FOUND
			</div>
		</Container>
	);
};
