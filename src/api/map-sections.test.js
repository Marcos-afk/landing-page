import { mapSectionContent, mapSectionGrid, mapSections, mapSectionTwoColumns } from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const sections = mapSections();
    expect(sections).toEqual([]);
  });

  it('should map default map section', () => {
    const section = [
      {
        id: 1,
        __component: 'random section',
        title: 'FIREFOX 85',
        description: 'To wrap up January, we are proud to bring you the release of Firefox 85.',
        metadata: {
          background: true,
        },
        image: {
          url: 'https://res.cloudinary.com/dvkp9flm8/image/upload/v1655932011/javascript_18b37d718b.svg',
        },
      },
    ];

    const data = mapSections(section);
    expect(data).toEqual(section);
  });

  it('should map section two columns if no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.id).toBe(0);
    expect(data.__component).toBe('');
    expect(data.description).toBe('');
    expect(data.image).toEqual({});
    expect(data.metadata).toEqual({});
  });

  it('should map section two columns', () => {
    const section = [
      {
        id: 1,
        __component: 'section.section-two-columns',
        title: 'FIREFOX 85',
        description: 'To wrap up January, we are proud to bring you the release of Firefox 85.',
        metadata: {
          background: true,
        },
        image: {
          url: 'https://res.cloudinary.com/dvkp9flm8/image/upload/v1655932011/javascript_18b37d718b.svg',
        },
      },
    ];

    const data = mapSections(section);
    expect(data[0].__component).toBe('section.section-two-columns');
    expect(data[0].id).toBe(1);
    expect(data[0].description).toBe('To wrap up January, we are proud to bring you the release of Firefox 85.');
    expect(data[0].metadata.background).toBe(true);
    expect(data[0].image.url).toBe(
      'https://res.cloudinary.com/dvkp9flm8/image/upload/v1655932011/javascript_18b37d718b.svg',
    );
  });

  it('should map section grid if no data', () => {
    const data = mapSectionGrid();
    expect(data.id).toBe(0);
    expect(data.title).toBe('');
    expect(data.__component).toBe('');
    expect(data.description).toBe('');
    expect(data.metadata).toEqual({});
    expect(data.text_grid).toEqual([]);
    expect(data.image_grid).toEqual([]);
  });

  it('should map section grid without images', () => {
    const section = [
      {
        id: 2,
        __component: 'section.section-grid',
        title: 'MY GRID',
        description: 'Uma breve descrição.',
        metadata: {
          background: true,
        },
        text_grid: [
          {
            id: 4,
            title: 'Teste 1',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.',
          },
        ],
        image_grid: [],
      },
    ];

    const data = mapSections(section);
    expect(data[0].id).toBe(2);
    expect(data[0].__component).toBe('section.section-grid');
    expect(data[0].title).toBe('MY GRID');
    expect(data[0].description).toBe('Uma breve descrição.');
    expect(data[0].metadata.background).toBe(true);
    expect(data[0].text_grid[0].title).toBe('Teste 1');
  });

  it('should map section grid with images', () => {
    const section = [
      {
        id: 3,
        __component: 'section.section-grid',
        title: 'GALLERY',
        description: 'Uma breve descrição.',
        metadata: {
          background: true,
        },
        text_grid: [],
        image_grid: [
          {
            url: 'https://res.cloudinary.com/dvkp9flm8/image/upload/v1655933012/thumbnail_photo_1614232296132_8e2b98031ab2_1ac4be2f3b.jpg',
          },
        ],
      },
    ];

    const data = mapSections(section);
    expect(data[0].id).toBe(3);
    expect(data[0].__component).toBe('section.section-grid');
    expect(data[0].title).toBe('GALLERY');
    expect(data[0].description).toBe('Uma breve descrição.');
    expect(data[0].metadata.background).toBe(true);
    expect(data[0].image_grid[0].url).toBe(
      'https://res.cloudinary.com/dvkp9flm8/image/upload/v1655933012/thumbnail_photo_1614232296132_8e2b98031ab2_1ac4be2f3b.jpg',
    );
  });

  it('should map section content if no data', () => {
    const data = mapSectionContent();

    expect(data.id).toBe(0);
    expect(data.__component).toBe('');
    expect(data.title).toBe('');
    expect(data.content).toBe('');
    expect(data.metadata).toEqual({});
  });

  it('should map section content', () => {
    const section = [
      {
        id: 2,
        __component: 'section.section-content',
        title: 'PRICING',
        content:
          'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance.',
        metadata: {
          background: false,
        },
      },
    ];

    const data = mapSections(section);
    expect(data[0].id).toBe(2);
    expect(data[0].__component).toBe('section.section-content');
    expect(data[0].title).toBe('PRICING');
    expect(data[0].content).toBe(
      'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance.',
    );
    expect(data[0].metadata.background).toBe(false);
  });
});
