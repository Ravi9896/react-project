import React from "react";
import { useContext } from "react";
import Name from "../context/Name";

function Profile() {
  const {mode}=useContext(Name);
  return <div>hello i am {mode}</div>;
}

export default Profile;
