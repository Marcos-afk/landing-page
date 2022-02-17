import { screen } from '@testing-library/react';
import LogoLink from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="teste logo" link="#target" />);

    const logoComponentExist = screen.getByRole('heading', { name: 'teste logo' });
    expect(logoComponentExist).toBeInTheDocument();

    const logoComponent = screen.getByRole('link', { name: 'teste logo' });
    expect(logoComponent).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink text="teste logo" link="#target" srcImg="https://cdn.worldvectorlogo.com/logos/ul.svg" />);

    const logoComponent = screen.getByAltText('teste logo');
    expect(logoComponent).toHaveAttribute('src', 'https://cdn.worldvectorlogo.com/logos/ul.svg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="teste logo" link="#target" srcImg="https://cdn.worldvectorlogo.com/logos/ul.svg" />,
    );
    expect(container).toMatchSnapshot();
  });
});
