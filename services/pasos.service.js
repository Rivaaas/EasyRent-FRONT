export const getPasos = async () => {
  return await fetch(`${process.env.URL_API_RENT}/api/pasosns/?populate=imagen`, {
    method: 'GET'
  })
  .then((res) => res.json())
  .then(({data}) => data)
};