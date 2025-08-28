import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddPet from "../pages/AddPet/AddPet";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import shelterReducer, { addPet } from "../redux/slices/shelterSlice";
import { BrowserRouter } from "react-router-dom";

// ------------------------
// Mock de navigate
const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("AddPet Component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        shelter: shelterReducer,
      },
    });
  });

  test("Renderiza todos los campos del formulario", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddPet />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Agregar Mascota/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Edad/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Especie/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sexo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Talla/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Historia de la mascota/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Foto de perfil/i)).toBeInTheDocument();
    expect(screen.getByText(/Guardar/i)).toBeInTheDocument();
  });

  test("Actualiza estado al escribir en inputs", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddPet />
        </BrowserRouter>
      </Provider>
    );

    const nombreInput = screen.getByLabelText(/Nombre/i);
    fireEvent.change(nombreInput, { target: { value: "Firulais" } });
    expect(nombreInput.value).toBe("Firulais");

    const edadInput = screen.getByLabelText(/Edad/i);
    fireEvent.change(edadInput, { target: { value: "2" } });
    expect(edadInput.value).toBe("2");
  });

  test("Simula submit y despacha addPet", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddPet />
        </BrowserRouter>
      </Provider>
    );

    const nombreInput = screen.getByLabelText(/Nombre/i);
    fireEvent.change(nombreInput, { target: { value: "Firulais" } });

    const guardarBtn = screen.getByText(/Guardar/i);
    fireEvent.click(guardarBtn);

    // Revisamos que el pet fue agregado al store
    const state = store.getState().shelter.pets.adoptables;
    expect(state).toHaveLength(1);
    expect(state[0].name).toBe("Firulais");

    // Revisamos que navigate fue llamado
    expect(mockedNavigate).toHaveBeenCalledWith("/perfil-refugio");
  });

  test("Muestra preview al subir archivo", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddPet />
        </BrowserRouter>
      </Provider>
    );

    const fileInput = screen.getByLabelText(/Foto de perfil/i);
    const file = new File(["dummy"], "pet.png", { type: "image/png" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    // Como FileReader es async, debemos esperar a que aparezca el preview
    setTimeout(() => {
      const preview = screen.getByAltText(/Preview mascota/i);
      expect(preview).toBeInTheDocument();
    }, 100);
  });
});