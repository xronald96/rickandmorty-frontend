import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { PaginationPage } from '../Pagination';
describe('List', () => {
	beforeEach(() => {
		// eslint-disable-next-line testing-library/no-render-in-setup
		render(<PaginationPage pages={20} />);
	});
	test('initial pagination state', () => {
		expect(screen.getByText('1')).toBeInTheDocument();
		expect(screen.getByText('20')).toBeInTheDocument();
	});

	test('click next', () => {
		const element = screen.getByTestId('goNext');
		act(() => element.click());
		expect(screen.getByText('2')).toBeInTheDocument();
	});

	test('click back in the first screen', () => {
		const element = screen.getByTestId('goBack');
		act(() => element.click());
		expect(screen.getByText('1')).toBeInTheDocument();
	});

	test('click go last', () => {
		const element = screen.getByTestId('goLast');
		act(() => element.click());
		expect(screen.queryAllByText('20').length).toBe(2);
	});
});
