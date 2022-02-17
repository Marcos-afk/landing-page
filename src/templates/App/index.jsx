import Heading from '../../components/Heading';
import NavLinks from '../../components/NavLinks';
import TextComponent from '../../components/TextComponent';
import links from '../../components/NavLinks/mock';
import LogoLink from '../../components/LogoLink';

const Home = () => {
  return (
    <div>
      <Heading>logo</Heading>
      <TextComponent>Testando componente de texto</TextComponent>
      <NavLinks links={links} />
      <LogoLink
        text="Banana"
        srcImg="https://files.passeidireto.com/1cc481c0-d28a-4f01-814f-1d9c0d3d2a26/1cc481c0-d28a-4f01-814f-1d9c0d3d2a26.jpeg"
        link="http://localhost:3000/"
      />
      <LogoLink text="Banana" link="http://localhost:3000/" />
    </div>
  );
};

export default Home;
