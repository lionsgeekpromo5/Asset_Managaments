import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Avatar() {
  const { user, setUser } = useContext(UserContext);

  const updateMode = () => {
    const newUser = { ...user };
    if (newUser.lightMode == "light") {
      newUser.lightMode = "dark";
    } else {
      newUser.lightMode = "light";
    }
    setUser(newUser);
  };
  console.log(user);

  return (
    <div className="w-fll bg-white rounded-md flex items-center justify-between p-2">
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.city}</p>
      </div>
      <button
        className="bg-amber-500 rounded-md p-2 h-fit"
        onClick={() => updateMode()}
      >
        {user.lightMode}
      </button>
    </div>
  );
}

export default Avatar;
