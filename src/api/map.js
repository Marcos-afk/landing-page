export const mapData = (pagesData = [{}]) => {
  return pagesData.map(data => {
    const { footer_text = '', title = '', slug = '' } = data;

    return {
      footer_text,
      title,
      slug,
    };
  });
};
