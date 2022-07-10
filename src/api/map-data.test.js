import { mapData } from './map';

describe('map-data', () => {
  it('should map data even if there is not data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footer_text).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.slug).toBe('');
  });

  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        title: 'Pages',
        slug: 'pages',
        footer_text: 'Feito com amor por Marcos André 🧡',
      },
    ])[0];
    expect(pagesData.footer_text).toBe('Feito com amor por Marcos André 🧡');
    expect(pagesData.title).toBe('Pages');
    expect(pagesData.slug).toBe('pages');
  });
});
