import GridContent from '.';
import { renderTheme } from '../../styles/render-theme';
import data from './mock';
describe('<GridContent />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridContent title={data.title} background={true} html={data.html} />);
    expect(container).toMatchSnapshot();
  });

  it('should render with false background', () => {
    const { container } = renderTheme(<GridContent title={data.title} html={data.html} />);
    expect(container).toMatchSnapshot();
  });
});
