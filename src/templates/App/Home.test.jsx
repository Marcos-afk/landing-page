import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from './index';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Página Inicial' }).parentElement;
  expect(headingContainer).toHaveStyle({ background: 'blue' });
});
