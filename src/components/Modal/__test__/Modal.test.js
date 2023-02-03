import { render, screen } from '@testing-library/react';
import { BootstrapModal } from '../Modal';
import characterResponde from '../../../testing/mocks/characterResponde.json'
describe('List', () => {
	test('Show modal', () => {
		render(<BootstrapModal show={true} data={characterResponde} />);
		expect(screen.getByTestId('modal')).toBeInTheDocument();
	});
});
