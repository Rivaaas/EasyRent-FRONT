export const getImage = (car) => {
  const {
    attributes: {
      imagen: {
        data = []
      } = {}
    } = {}
  } = car;

  if (!data?.length) {
    return ''
  }

  return `${process.env.URL_API_RENT}${data[0]?.attributes?.url}`;
}