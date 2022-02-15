import * as Styled from './styles';
import P from 'prop-types';
import MenuLink from '../MenuLink';

const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map(link => (
        <MenuLink key={link._id} link={link.link} newTab={link.newTab}>
          {link.children}
        </MenuLink>
      ))}
    </Styled.Container>
  );
};

export default NavLinks;

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      link: P.string.isRequired,
      newTab: P.bool,
      children: P.string.isRequired,
    }),
  ),
};
