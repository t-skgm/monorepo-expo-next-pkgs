import { client } from "./client";

export async function Message() {
  const apiRes = await client.greeting
    .$post({
      json: { name: "world" },
    })
    .then((res) => res.json());

  return <p>API message is {apiRes.message}</p>;
}
