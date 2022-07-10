import Template from './';
import footerMock from '../../components/Footer/mock';
import menuMock from '../../components/NavLinks/mock';
import logoMock from '../../components/LogoLink/mock';
import GridMock from '../../components/GridText/mock';
import GridText from '../../components/GridText';
import GridTwoColumns from '../../components/GridTwoColumns/';
import GridTwoColumnsMock from '../../components/GridTwoColumns/mock';
import GridGallery from '../../components/GridGallery';
import GridGalleryMock from '../../components/GridGallery/mock';
import GridContent from '../../components/GridContent';
import GridContentMock from '../../components/GridContent/mock';
import { renderTheme } from '../../styles/render-theme';

describe('< Template />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Template footerHtml={footerMock.footerHtml} links={menuMock} logoData={logoMock}>
        <GridTwoColumns {...GridTwoColumnsMock} background />
        <GridContent {...GridContentMock} />
        <GridText {...GridMock} background />
        <GridGallery {...GridGalleryMock} />
        <GridText {...GridMock} background />
        <GridContent {...GridContentMock} />
      </Template>,
    );
    expect(container).toMatchSnapshot();
  });
});
