import Styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = Styled.div`
${({ theme }) => css`
  > ${TextComponent} {
    margin-bottom: ${theme.spacings.xhuge};
  }
`}`;

export const Grid = Styled.div`
${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacings.large};
`}`;

export const GridElement = Styled.div`
${() => css`
  overflow: hidden;
`}`;

export const Image = Styled.img`
${() => css`
  width: 100%;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`}`;
