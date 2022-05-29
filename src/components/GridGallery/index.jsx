import * as Styled from './styles';
import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridGallery = ({ background = false, title, description, grid }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map(element => (
            <Styled.GridElement key={`${element.altText}${element.srcImg}`}>
              <Styled.Image src={element.srcImg} alt={element.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridGallery.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};

export default GridGallery;
