import axios from "axios";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const baseUri = `https://${domain}/`;

export default function loginAuth0() {
  const instance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  const loginUri =
    baseUri +
    `authorize?
    response_type=token&
    client_id=${clientID}&
    connection=ExampleDB&
    redirect_uri=http://127.0.0.1:5001/&
    state=STATE
  `;

  instance
    .get(loginUri)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
