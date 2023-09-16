import React from "react";
import Borcelle from "../images/Borcelle.png";
import { NavLink } from "react-router-dom";
import "../App.css";
import { Heading } from "@chakra-ui/react";

export default function Nav() {
  return (
    <div className="navMainDiv">
      <div className="navLogoDiv">
        <img src={Borcelle} alt="logoImg" />
        <Heading>
          My<span style={{ color: "#684a08" }}>Resta</span>
        </Heading>
      </div>
      <div className="navLinksDiv">
        <NavLink to={"/"} className={"navLinks"}>
          Home
        </NavLink>
        <NavLink to={"/restaurant"} className={"navLinks"}>
          Restaurant
        </NavLink>
        <NavLink to={"/addRestaurant"} className={"navLinks"}>
          Add-Restaurant
        </NavLink>
        <NavLink to={"/login"} className={"navLinks"}>
          Login
        </NavLink>
      </div>
    </div>
  );
}
