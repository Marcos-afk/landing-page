import links from '../../components/NavLinks/mock';
import SectionBackground from '../../components/SectionBackground';
import Menu from '../../components/Menu';
import logoData from '../../components/LogoLink/mock';

const Home = () => {
  return (
    <div>
      <SectionBackground background>
        <Menu logoData={logoData} links={links} />
      </SectionBackground>
    </div>
  );
};

export default Home;
