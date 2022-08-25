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

  return `http://localhost:1337${data[0]?.attributes?.url}`;
}