import { api, token } from "../../constants";

export default function postToApi(endpoint, body, useToken, method = "POST") {
  if (useToken) {
    return fetch(`${api}/${endpoint}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
      },
    }).then((res) => res.json());
  }

  return fetch(`${api}/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
