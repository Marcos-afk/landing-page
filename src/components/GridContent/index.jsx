import * as Styled from './styles';
import P from 'prop-types';

const GridContent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

GridContent.propTypes = {
  children: P.node.isRequired,
};

export default GridContent;
