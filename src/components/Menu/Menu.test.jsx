import links from '../NavLinks/mock';
import logoData from '../LogoLink/mock';
import Menu from '.';
import { renderTheme } from '../../styles/render-theme';
import { fireEvent, screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
describe('<Menu />', () => {
  it('should render Logo and Main menu', () => {
    renderTheme(<Menu links={links} logoData={logoData} />);

    const logoComponent = screen.getByRole('img', { name: 'LOGO' });
    expect(logoComponent).toBeInTheDocument();

    const navComponent = screen.getByRole('navigation', { name: 'Main menu' });
    expect(navComponent).toBeInTheDocument();
  });

  it('should render menu mobile and button for open and close menu', () => {
    renderTheme(<Menu links={links} logoData={logoData} />);

    const buttonComponent = screen.getByLabelText('Open/Close menu');
    const menuComponent = buttonComponent.nextSibling;

    expect(buttonComponent).toHaveStyleRule('display', 'none');
    expect(buttonComponent).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuComponent).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    const openMenu = screen.getByLabelText('Open menu');
    expect(openMenu).toBeInTheDocument();

    fireEvent.click(buttonComponent);
    expect(menuComponent).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });

    const closeMenu = screen.getByLabelText('Close menu');
    expect(closeMenu).toBeInTheDocument();

    fireEvent.click(menuComponent);
    expect(menuComponent).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    const openMenu2 = screen.getByLabelText('Open menu');
    expect(openMenu2).toBeInTheDocument();
  });

  it('should not render links', () => {
    renderTheme(<Menu logoData={logoData} />);

    const menuComponent = screen.queryByRole('navigation', { name: 'Main menu' }).firstChild;
    expect(menuComponent).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu links={links} logoData={logoData} />);
    expect(container).toMatchSnapshot();
  });
});
