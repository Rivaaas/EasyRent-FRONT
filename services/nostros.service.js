export const getInfoNosotros = async () => {
  return await fetch(`${process.env.URL_API_RENT}/api/nosotros?populate=img`, {
    method: 'GET'
  })
  .then((res) => res.json())
  .then(({data}) => data)
};