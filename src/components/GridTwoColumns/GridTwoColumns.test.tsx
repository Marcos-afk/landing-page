import { screen } from '@testing-library/react';
import GridTwoColumns from '.';
import { renderTheme } from '../../styles/render-theme';
import data from './mock';
describe('<GridTwoColumns />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridTwoColumns title={data.title} text={data.text} srcImg={data.srcImg} />);
    const headingComponent = screen.getByRole('heading');
    expect(headingComponent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
