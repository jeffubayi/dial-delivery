import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomeNav.module.css";
import { ReactComponent as PizzaIcon } from "../../../Assets/pizza-icon.svg";
import { ReactComponent as BurguersIcon } from "../../../Assets/burguers-icon.svg";
import { ReactComponent as CombosIcon } from "../../../Assets/combos-icon.svg";
import { ReactComponent as DessertsIcon } from "../../../Assets/desserts-icon.svg";
import { ReactComponent as DrinksIcon } from "../../../Assets/drinks-icon.svg";

const HomeNav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          to="/Pizza"
          style={({ isActive }) => ({
            backgroundColor: !isActive ? "#fff" : " #fdc844",
            borderRadius: !isActive ? "0" : "8px",
            color: !isActive ? "#848484" : "#000",
          })}
        >
          <PizzaIcon />
          Pizza
        </NavLink>
        <NavLink
          to="/Bebidas"
          style={({ isActive }) => ({
            backgroundColor: !isActive ? "#fff" : " #fdc844",
            borderRadius: !isActive ? "0" : "8px",
            color: !isActive ? "#848484" : "#000",
          })}
        >
          <DrinksIcon />
          Drinks
        </NavLink>
        <NavLink
          to="/Sobremesas"
          style={({ isActive }) => ({
            backgroundColor: !isActive ? "#fff" : " #fdc844",
            borderRadius: !isActive ? "0" : "8px",
            color: !isActive ? "#848484" : "#000",
          })}
        >
          <DessertsIcon />
          Ice Cream
        </NavLink>
        <NavLink
          to="/Combos"
          style={({ isActive }) => ({
            backgroundColor: !isActive ? "#fff" : " #fdc844",
            borderRadius: !isActive ? "0" : "8px",
            color: !isActive ? "#848484" : "#000",
          })}
        >
          <CombosIcon />
          Fries
        </NavLink>
        <NavLink
          to="/Burguers"
          style={({ isActive }) => ({
            backgroundColor: !isActive ? "#fff" : " #fdc844",
            borderRadius: !isActive ? "0" : "8px",
            color: !isActive ? "#848484" : "#000",
          })}
        >
          <BurguersIcon />
          Burgers
        </NavLink>
      </nav>
    </>
  );
};

export default HomeNav;
