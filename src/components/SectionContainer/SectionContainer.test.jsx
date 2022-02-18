import { screen } from '@testing-library/react';
import SectionContainer from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionBackground />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>texto</h1>
      </SectionContainer>,
    );

    const containerComponent = screen.getByRole('heading');
    expect(containerComponent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
