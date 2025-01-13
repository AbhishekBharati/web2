import axios from "axios";

export default async function User() {

  const response = await axios.get("http:localhost:3000/api/v1/user/details");

  await new Promise(r => setTimeout(r, 5000));

  const data = response.data;
  console.log("Heyy");

  return <div>
    User Page
    {data.user}
    {data.email}
  </div>
}
