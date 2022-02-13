import { Heading } from '../../components/Heading';
import MenuLink from '../../components/MenuLink';
import TextComponent from '../../components/TextComponent';

const Home = () => {
  return (
    <div>
      <Heading>logo</Heading>
      <TextComponent>Testando componente de texto</TextComponent>
      <div style={{ display: 'flex' }}>
        <MenuLink link="https://www.youtube.com/watch?v=Bo8Vu8YI8WY" newTab>
          teste de link, clique aqui!
        </MenuLink>
      </div>
    </div>
  );
};

export default Home;
