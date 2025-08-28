import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

// 🔹 Contenedor del NavBar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ff914d; /* Naranja cálido */
  color: white;
`;

// 🔹 Logo (convertido en Link)
const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: white;

  &:hover {
    color: #ffe5d1;
  }
`;

// 🔹 Contenedor de links
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

// 🔹 Estilo de cada link
const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  transition: 0.3s ease-in-out;

  &.active {
    border-bottom: 2px solid white;
    padding-bottom: 0.2rem;
  }

  &:hover {
    color: #ffe5d1;
  }
`;

function NavBar() {
  return (
    <Nav>
      <Logo to="/">🐾 Alza una Pata</Logo>
      <NavLinks>
        <StyledLink to="/quienes-somos">¿Quiénes somos?</StyledLink>
        <StyledLink to="/registra-tu-refugio">Registra tu refugio</StyledLink>
        <StyledLink to="/login">Iniciar sesión</StyledLink>
      </NavLinks>
    </Nav>
  );
}

export default NavBar;