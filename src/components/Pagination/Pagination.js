import style from 'styled-components';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
const PaginationContainer = style.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
	height:100px;
	background: #E89242FF;
`;

const PaginationButtons = style.div`
height: 30px;
width: 22px;
display: flex;
color: white;
margin-right: 16px;
align-items: center;
justify-content: center;
font-weight: bold;
`;
export const PaginationPage = ({ pages, onPageChange }) => {
	const [page, setPage] = useState(1);
	const goFirst = () => {
		onPageChange &&onPageChange(1);
		setPage(1);
	};
	const goLast = () => {
		onPageChange &&onPageChange(pages);
		setPage(pages);
	};
	const goNext = () => {
		if (page < pages) {
			onPageChange && onPageChange(page + 1);
			setPage((prev) => prev + 1);
		}
	};

	const goBack = () => {
		if (page > 1) {
			onPageChange &&onPageChange(page - 11);
			setPage((prev) => prev - 1);
		}
	};

	return (
		<PaginationContainer>
			<PaginationButtons data-testid="goFirst" onClick={goFirst} style={{ cursor: 'pointer' }}>
				<FontAwesomeIcon icon={faLessThan} />
				<FontAwesomeIcon icon={faLessThan} />
			</PaginationButtons>
			<PaginationButtons data-testid="goBack" onClick={goBack} style={{ cursor: 'pointer' }}>
				<FontAwesomeIcon icon={faLessThan} />
			</PaginationButtons>
			<PaginationButtons data-testid="currentPage">{page}</PaginationButtons>
			<PaginationButtons>of</PaginationButtons>
			<PaginationButtons data-testid="lastPage">{pages}</PaginationButtons>
			<PaginationButtons data-testid="goNext" onClick={goNext} style={{ cursor: 'pointer' }}>
				<FontAwesomeIcon icon={faGreaterThan} />
			</PaginationButtons>
			<PaginationButtons data-testid="goLast" onClick={goLast} style={{ cursor: 'pointer' }}>
				<FontAwesomeIcon icon={faGreaterThan} />
				<FontAwesomeIcon icon={faGreaterThan} />
			</PaginationButtons>
		</PaginationContainer>
	);
};
