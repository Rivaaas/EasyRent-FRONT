export const getInfoNosotros = () => {
  return fetch(`${process.env.URL_API_RENT}/nosotros`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .then(({ data }) => data?.attributes)
}