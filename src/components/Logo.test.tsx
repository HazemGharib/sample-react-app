import {render, screen} from '@testing-library/react';
import {Logo} from './Logo';

describe('Logo', () => {
  beforeEach(() => {
    render(<Logo />);
  });

  test('Should render logo', () => {
    const logoElement = screen.getByRole('img');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.getAttribute('src')).toEqual('logo.svg');
  });

  test('Should render learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
