import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
    // using the server for request
    // test('renders posts if request succeeds', async () => {
    //     render(<Async />);

    //     const listItemElements = await screen.findAllByRole('listitem');
    //     expect(listItemElements).not.toHaveLength(0);
    // });

    // creating mock server for request - so the network traffic isn't increased, accidently we don't make any request while testing and test doesn't fail just because actual server was down for some reason
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [ { id: 'p1', title: 'First Post' } ]
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});
