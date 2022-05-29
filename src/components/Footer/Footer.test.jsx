import Footer from './';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import data from './mock';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={data.html} />);
    expect(screen.getByRole('link', { name: 'Feito com ❤ por Marcos André' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
