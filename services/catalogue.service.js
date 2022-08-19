export const getCatalogue = () => {
  return fetch(`${process.env.URL_API_RENT}/catalogue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .then(({ data }) => data?.attributes)
};