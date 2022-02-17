import { renderTheme } from '../../styles/render-theme';
import Heading from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
describe('<Heading/>', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>testando texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'testando texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>testando texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'testando texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">testando texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'testando texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">testando texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'testando texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">testando texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'testando texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">testando texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'testando texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase', () => {
    renderTheme(<Heading uppercase>testando texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'testando texto' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">testando texto</Heading>);
    const element = container.querySelector('h6');
    expect(element.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>testando texto</Heading>);
    expect(container).toMatchSnapshot();
  });
});
