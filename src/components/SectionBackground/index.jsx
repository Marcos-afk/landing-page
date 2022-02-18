import P from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer';
const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};

export default SectionBackground;
