import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Login = () => {
  return (
    <>
      <div className="empty-login">
        <AiOutlineLogin size={150} />
        <h3>Your login failed</h3>
      </div>
      <div className="logout">
        <AiOutlineLogout size={150} />
        <h3>Your logout failed</h3>
      </div>
    </>
  );
};

export default Login;
