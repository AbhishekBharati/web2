import axios from "axios";
// import React, { useEffect, useState } from "react";

// Here we are doing client side Rendering and not server Side Rendering yahi kaam toh hum react mei kr rhe the toh next
// mei move krne ka fayeda kya??? Isiliye ab hum next ke tarike se krenge.
export default async function Profile() {
  // const [profilePic, setProfilePic] = useState("");
  //
  // useEffect(() => {
  //   const res = axios.get("http://localhost:3000/api/profile", {
  //     headers: {
  //       authorization: localStorage.getItem("token")
  //     }
  //   }).then(res => {
  //     setProfilePic(res.data.avatarURL);
  //   })
  // }, [])
  //
  const res = await axios.get("http://localhost:3000/api/profile", {
    headers: {
      authorization: localStorage.getItem("token"),
      // Boss yeh logic toh server side pr run krega aur serverSide mei toh localStorage hai hi nahi... Toh token kaha se aayega?
    }
  })
  const profilePic = res.data.avatarURL;
  return <div>
    {profilePic}
  </div>
}
