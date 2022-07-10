import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if not data', () => {
    const menu = mapMenu();
    expect(menu.id).toBe(0);
    expect(menu.logo_link).toBe('');
    expect(menu.logo_text).toBe('');
    expect(menu.logo).toEqual({});
    expect(menu.menu_link).toEqual([]);
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      id: 1,
      logo_link: '#home',
      logo_text: 'Logo',
      logo: {
        data: null,
      },
      menu_link: [
        {
          id: 1,
          link_text: 'intro',
          url: '#intro',
          open_in_new_tab: false,
        },
        {
          id: 2,
          link_text: 'grid-one',
          url: '#grid-one',
          open_in_new_tab: false,
        },
      ],
    });

    expect(menu.id).toBe(1);
    expect(menu.logo_link).toBe('#home');
    expect(menu.logo_text).toBe('Logo');
    expect(menu.logo.data).toBe(null);
    expect(menu.menu_link[0].id).toBe(1);
    expect(menu.menu_link[0].link_text).toBe('intro');
    expect(menu.menu_link[0].url).toBe('#intro');
    expect(menu.menu_link[0].open_in_new_tab).toBe(false);
  });

  it('should return an empty array if no links', () => {
    const menu = mapMenu();
    expect(menu.menu_link).toEqual([]);
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        id: 1,
        link_text: 'intro',
        url: '#intro',
        open_in_new_tab: false,
      },
      {},
    ]);

    expect(links[0].id).toBe(1);
    expect(links[0].link_text).toBe('intro');
    expect(links[0].url).toBe('#intro');
    expect(links[0].open_in_new_tab).toBe(false);
  });
});
