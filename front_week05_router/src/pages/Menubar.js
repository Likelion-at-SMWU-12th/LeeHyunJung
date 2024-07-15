import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuBar = styled.div`
  display: flex;
  gap: 70px;
  font-size: 20px;
  padding: 20px;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: White;
  background-color: Black;
  padding: 15px;
  border-radius: 20px;
  border-color: Black;

  &:hover {
    background-color: rgb(145, 145, 145);
  }
`;

const Menubar = () => {
  return (
    <MenuContainer>
      <MenuBar>
        <MenuItem to="/week01">1st Seminar</MenuItem>
        <MenuItem to="/week02">2nd Seminar</MenuItem>
        <MenuItem to="/week03">3rd Seminar</MenuItem>
        <MenuItem to="/week04">4th Seminar</MenuItem>
        <MenuItem to="/week05">5th Seminar</MenuItem>
      </MenuBar>
      <Outlet />
    </MenuContainer>
  );
};

export default Menubar;
