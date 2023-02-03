import style from 'styled-components';
const Card = style.div`
display: flex;
flex-direction: column;
width: 15%;
justify-content: center;
margin: 24px;
align-items:center;
background-image: ${(props) => `url(${props.image || 'white'})`};
background-size: cover;
height: 190px;
border-radius: .375rem;
color: white;
font-size: 23px;
font-weight: bold;
`;
export const List = ({ data, onCharacterClick }) => {
	return (
		<>
			{data.map((it) => {
				return (
					<Card data-testid="characterCard" key={it?.id} onClick={() => onCharacterClick(it)} image={it?.image}>
						<div>{it?.name}</div>
					</Card>
				);
			})}
		</>
	);
};
