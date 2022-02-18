import { screen } from '@testing-library/react';
import SectionBackground from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>texto</h1>
      </SectionBackground>,
    );

    const backgroundComponent = screen.getByRole('heading');
    expect(backgroundComponent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>texto</h1>
      </SectionBackground>,
    );

    const backgroundComponent = screen.getByRole('heading');
    expect(backgroundComponent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
