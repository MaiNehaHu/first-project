import React from "react";
import "./navbar.css";

import Image from "./college image/image";
import RealNav from "./realnav/realnav";
import Navs from './realnav/nav'

const Nav = () => {
  return (
    <>
      <Navs />
      <Image/>
      <RealNav />
    </>
  );
};

export default Nav;
