import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// Test suite
describe('Greeting Component', () => {
    test('renders "Hello World" as a text', () => {
        // Arrange
        render(<Greeting />);

        // Act === ...nothing here

        // Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "It\'s good to see you" if the button was not clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act === ...nothing here

        // Assert
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    test('doesn\'t render "It\'s good to see you!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />); //renders not this component but the whole component tree

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    });
});
