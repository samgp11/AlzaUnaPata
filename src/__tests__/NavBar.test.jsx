import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/layout/NavBar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar Component", () => {
  test("Renderiza el logo y los links correctamente", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    // Logo
    const logo = screen.getByText(/🐾 Alza una Pata/i);
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "/");

    // Link ¿Quiénes somos?
    const quienes = screen.getByText(/¿Quiénes somos\?/i);
    expect(quienes).toBeInTheDocument();
    expect(quienes.closest("a")).toHaveAttribute("href", "/quienes-somos");

    // Link Registra tu refugio
    const registra = screen.getByText(/Registra tu refugio/i);
    expect(registra).toBeInTheDocument();
    expect(registra.closest("a")).toHaveAttribute("href", "/registra-tu-refugio");

    // Link Iniciar sesión
    const login = screen.getByText(/Iniciar sesión/i);
    expect(login).toBeInTheDocument();
    expect(login.closest("a")).toHaveAttribute("href", "/login");
  });
});