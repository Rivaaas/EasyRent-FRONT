export const getCatalogue = async () => {
  return await fetch(`${process.env.URL_API_RENT}/api/autos/?populate=imagen`, {
    method: 'GET'
  })
  .then((res) => res.json())
  .then(({data}) => data)
};