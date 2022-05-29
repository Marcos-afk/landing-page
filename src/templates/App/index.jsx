import GridGallery from '../../components/GridGallery';
import mock from '../../components/GridGallery/mock';

const Home = () => {
  return (
    <div>
      <GridGallery background={mock.background} title={mock.title} description={mock.description} grid={mock.grid} />
    </div>
  );
};

export default Home;
