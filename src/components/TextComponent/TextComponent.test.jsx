import { screen } from '@testing-library/react';
import TextComponent from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render a text component', () => {
    renderTheme(<TextComponent>testando texto</TextComponent>);
    const paragraph = screen.getByText('testando texto');
    expect(paragraph).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>testando texto</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
