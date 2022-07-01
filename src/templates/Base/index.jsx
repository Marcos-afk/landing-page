import P from 'prop-types';
import Footer from '../../components/Footer';
import LogoLink from '../../components/LogoLink';
import Menu from '../../components/Menu';
import GoTop from '../../components/GoTop';
import * as Styled from './styles';

const Template = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Template.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
  footerHtml: P.string.isRequired,
};

export default Template;
