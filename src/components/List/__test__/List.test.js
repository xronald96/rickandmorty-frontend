import { render, screen } from '@testing-library/react';
import { List } from '../List';
import characterList from '../../../testing/mocks/characterListResponse.json';
describe('List', () => {
	test('renders list with 20 items', () => {
		render(<List data={characterList} />);
		const element = screen.getAllByTestId('characterCard');
		expect(element.length).toBe(20);
	});
	test('renders list without items', async () => {
		render(<List data={[]} />);
		expect(screen.queryAllByTestId('characterCard').length).toBe(0);
	});
});
