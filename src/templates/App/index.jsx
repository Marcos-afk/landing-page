import { Heading } from '../../components/Heading';
import NavLinks from '../../components/NavLinks';
import TextComponent from '../../components/TextComponent';
import links from '../../components/NavLinks/mock';

const Home = () => {
  return (
    <div>
      <Heading>logo</Heading>
      <TextComponent>Testando componente de texto</TextComponent>
      <NavLinks links={links} />
    </div>
  );
};

export default Home;
