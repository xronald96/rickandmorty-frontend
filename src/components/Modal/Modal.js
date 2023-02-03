import Modal from 'react-bootstrap/Modal';
import style from 'styled-components';
const Body = style.div`
    display:flex;
    flex-direction: column;
	width:50%;
    height: 100%;
    justify-content: center;
`;
const Header = style.div`
    display: flex;
    align-items: center;
    font-size:24px;
    font-weight: bold;
    flex-direction: column;
	width:50%;
	justify-content: center;
`;

const Container = style.div`
	display:flex;
	width: 100%;
	height: 279px;
`;

export const BootstrapModal = ({
	closeModal,
	show,
	data: { name, status, species, type, gender, origin, location, image, episode },
}) => {
	return (
		<>
			{show && (
				<Modal data-testid="modal"
					onHide={closeModal}
					show={show}
					aria-labelledby='contained-modal-title-vcenter'
					centered
				>
					<Container>
						<Header>
							<img style={{ marginRight: '10px' }} height={200} src={image} alt='' />{' '}
							{name}
						</Header>
						<Body>
							<div>Status: {status}</div>
							<div>Species: {species}</div>
							<div>Type: {type}</div>
							<div>Origin: {origin?.name}</div>
							<div>Gender: {gender}</div>
							<div>Location: {location.name}</div>
							<div>Number of episodes: {episode?.length}</div>
						</Body>
					</Container>
				</Modal>
			)}
		</>
	);
};
