export const getCatalogue = async () => {
  return await fetch(`${process.env.URL_API_RENT}/api/autos/?populate=imagen`, {
    method: 'GET'
  })
  .then((res) => res.json())
  .then(({data}) => data)
};

export const getCar = async (id) => {
  return await fetch(`${process.env.URL_API_RENT}/api/autos/${id}/?populate=imagen`)
  .then((res) => res.json())
  .then(({data}) => data)
}