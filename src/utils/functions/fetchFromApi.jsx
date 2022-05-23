import { api, token } from "../../constants";

export default function fetchFromApi(endpoint, useToken) {
  if (useToken) {
    return fetch(`${api}/${endpoint}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
      },
    }).then((res) => res.json());
  }

  return fetch(`${api}/${endpoint}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
