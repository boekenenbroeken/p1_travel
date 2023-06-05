import { render, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
    it('renders the button with children', () => {
        const { getByTestId } = render(
            <Button onClick={() => {}} isLoading={false}>
                Click me
            </Button>
        );

        const button = getByTestId('button');

        expect(button).toBeInTheDocument();
    });

    it('calls the onClick function when clicked', () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(
            <Button onClick={onClickMock} isLoading={false}>
                Click me
            </Button>
        );
        const button = getByTestId('button');

        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalled();
    });

    it('renders the loader when loading is true', () => {
        const { getByRole } = render(
            <Button onClick={() => {}} isLoading={true}>
                Click me
            </Button>
        );
        const loader = getByRole('presentation');

        expect(loader).toBeInTheDocument();
    });

    it('does not render the loader when loading is false', () => {
        const { queryByRole } = render(
            <Button onClick={() => {}} isLoading={false}>
                Click me
            </Button>
        );
        const loader = queryByRole('presentation');

        expect(loader).toBeNull();
    });
});
