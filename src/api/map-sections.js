export const mapSections = (sections = []) => {
  return sections.map(section => {
    switch (section.__component) {
      case 'section.section-two-columns':
        return mapSectionTwoColumns(section);

      case 'section.section-grid':
        return mapSectionGrid(section);

      case 'section.section-content':
        return mapSectionContent(section);

      default:
        return section;
    }
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const { id = 0, __component = '', title = '', description = '', metadata = {}, image = {} } = section;

  return { id, __component, title, description, metadata, image };
};

export const mapSectionGrid = (section = {}) => {
  const {
    id = 0,
    __component = '',
    title = '',
    description = '',
    metadata = {},
    text_grid = [],
    image_grid = [],
  } = section;

  return { id, __component, title, description, metadata, text_grid, image_grid };
};

export const mapSectionContent = (section = {}) => {
  const { id = 0, __component = '', title = '', content = '', metadata = {} } = section;

  return { id, __component, title, content, metadata };
};
