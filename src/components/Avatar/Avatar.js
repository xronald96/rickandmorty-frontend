import { useEffect } from 'react';
import style from 'styled-components';
const Container = style.div`
height: 50px;
width: 50px;
position: absolute;
top: 0;
right: 0;
background: red;
margin: 12px;
border-radius: 50%;
justify-content: center;
display: flex;
align-items: center;
font-weight: bold;
background: #E89242FF;
`;
export const Avatar = ({ currentUser }) => {
	return <>{currentUser && <Container>{currentUser.name.slice(0, 1)}</Container>}</>;
};
