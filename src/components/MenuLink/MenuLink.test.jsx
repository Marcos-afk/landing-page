import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import MenuLink from '.';

describe('<MenuLink/>', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.youtube.com/watch?v=Bo8Vu8YI8WY">teste link</MenuLink>);

    const linkComponent = screen.getByRole('link', { name: 'teste link' });

    expect(linkComponent).toHaveAttribute('target', '_self');
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://www.youtube.com/watch?v=Bo8Vu8YI8WY" newTab>
        teste link
      </MenuLink>,
    );

    const linkComponent = screen.getByRole('link', { name: 'teste link' });

    expect(linkComponent).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://www.youtube.com/watch?v=Bo8Vu8YI8WY">teste link</MenuLink>,
    );
    expect(container).toMatchSnapshot();
  });
});
