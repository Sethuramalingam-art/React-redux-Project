import React, { useState } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { fromLogin } from './action'
const Login = () => {
  const [userName, setUserName] = useState("");
  const userNameFromState = useSelector(state => state.login.username)
   const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(fromLogin(userName))
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>{userNameFromState}</div>
      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
};

export default Login;
