import GridText from '.';
import { renderTheme } from '../../styles/render-theme';
import data from './mock';

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <GridText title={data.title} description={data.description} grid={data.grid} background={data.background} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with false background', () => {
    const { container } = renderTheme(<GridText title={data.title} description={data.description} grid={data.grid} />);

    expect(container).toMatchSnapshot();
  });
});
