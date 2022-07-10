export const mapMenu = (menuData = {}) => {
  const { id = 0, logo_link = '', logo_text = '', logo = {}, menu_link = [] } = menuData;
  return {
    id,
    logo_link,
    logo_text,
    logo,
    menu_link,
  };
};

export const mapMenuLinks = (menuLinks = []) => {
  return menuLinks.map(data => {
    const { id = 0, link_text = '', url = '', open_in_new_tab = false } = data;
    return {
      id,
      link_text,
      url,
      open_in_new_tab,
    };
  });
};
