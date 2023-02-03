import React, { useEffect, useState } from 'react';
import { List } from '../components/List/List';
import { getCharacter } from '../services/character';
import style from 'styled-components';
import { PaginationPage } from '../components/Pagination/Pagination';
import { BootstrapModal } from '../components/Modal/Modal';
import { CarrouselBoostraps } from '../components/Carrousel/Carrousel';
import { Avatar } from '../components/Avatar/Avatar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ContainerList = style.div`
    display: flex;
    flex-wrap: wrap;
	width: 100%;
	justify-content: center;
`;

const Container = style.div`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-direction:column;
`;

export const Character = () => {
	const navigate = useNavigate();
	const currentUser = useSelector((state) => state.currentUser);
	const [modalData, setModalData] = useState({
		data: {},
		show: false,
	});
	const [list, setList] = useState([]);
	const [pages, setPages] = useState(0);
	const [filter, setFilter] = useState({});
	useEffect(() => {
		if (!currentUser) navigate('/login');
		getCharacterRequest();
	}, []);

	const openModal = (character) => setModalData({ data: character, show: true });
	const closeModal = () => setModalData({ ...modalData, show: false });
	const onPageChange = (page) => {
		const newFilter = { ...filter, page };
		setFilter(newFilter);
		getCharacterRequest(newFilter);
	};

	const getCharacterRequest = async (filterParam) => {
		const result = await getCharacter(filterParam);
		if (result.status) {
			setList(result.response.results);
			setPages(result.response.info.pages);
		}
	};
	return (
		<Container>
			<CarrouselBoostraps />
			<Avatar currentUser={currentUser} />
			<ContainerList style={{ display: 'wrap', backgroundColor: '#E89242FF' }}>
				{
					<BootstrapModal
						show={modalData.show}
						data={modalData.data}
						closeModal={closeModal}
					/>
				}
				<List data={list} onCharacterClick={openModal} />
			</ContainerList>
			<PaginationPage pages={pages} onPageChange={onPageChange} />
		</Container>
	);
};
