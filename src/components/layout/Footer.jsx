import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: 2rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Alza una Pata 🐾 | Todos los derechos reservados</p>
    </FooterContainer>
  );
}

export default Footer;