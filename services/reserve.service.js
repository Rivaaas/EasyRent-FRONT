import { URL_API_RENT } from "../constants";

export const postReserve = async (body,jwt) => {
  return await fetch(`${URL_API_RENT}/api/reservas` ,{
    method: 'POST',
    body : JSON.stringify(body),
    headers : {
      'Content-Type' : 'application/json',
      'Authorization' : jwt
    }
  })
  .then((res) => res.json())
  .then((json) => json)
  .catch((error) => undefined)
};

