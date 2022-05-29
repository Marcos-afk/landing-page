import GridGallery from '.';
import { renderTheme } from '../../styles/render-theme';
import data from './mock';

describe('<GridGallery  />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <GridGallery title={data.title} description={data.description} grid={data.grid} background={data.background} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with false background', () => {
    const { container } = renderTheme(
      <GridGallery title={data.title} description={data.description} grid={data.grid} />,
    );

    expect(container).toMatchSnapshot();
  });
});
