import React from "react";
import LandingMenu from "./LandingMenu";

const LandingPage = () => {
  return ( <
    div className = "landingPage" >
    <
    LandingMenu name = "LOGIN"
    url = "/login"
    name2 = "REGISTER"
    url2 = "/register" /
    >
    <
    div className = "landing" >
    <
    h1 > TradeTalks - Virtual Trader < /h1> <
    /div>  <
    div className = "background" >
    <
    svg width = "100%"
    height = "100" >
    <
    path d = "M600 0 L0 0 L3200 5250 Z" / >
    <
    path d = "M0 0 L0 2000 L4100 4040 Z" / >
    <
    /svg> < /
    div > <
    /div>
  );
};
export default LandingPage;
