import { screen } from '@testing-library/react';
import NavLinks from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import links from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={links} />);
    const navBarComponent = screen.getAllByRole('link');
    expect(navBarComponent).toHaveLength(links.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    const navBarComponent = screen.queryAllByAltText(/Industry Baby/i);
    expect(navBarComponent).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks links={links} />);
    const navBarComponent = screen.getByText(/Industry Baby/i).parentElement;
    expect(navBarComponent).toHaveStyleRule('flex-flow', 'column wrap', { media: theme.media.lteMedium });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={links} />);
    expect(container).toMatchSnapshot();
  });
});
