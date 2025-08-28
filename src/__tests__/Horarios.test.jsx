import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Horarios from "../components/Horarios/Horarios";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import shelterReducer from "../redux/slices/shelterSlice";

describe("Horarios Component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        shelter: shelterReducer,
      },
      preloadedState: {
        shelter: {
          info: { horario: "Lunes a Viernes 9am - 5pm" },
          pets: {
            adoptables: [],
            temporales: [],
            apadrinables: [],
          },
        },
      },
    });
  });

  test("Renderiza horario desde Redux", () => {
    render(
      <Provider store={store}>
        <Horarios />
      </Provider>
    );

    expect(screen.getByText(/Lunes a Viernes 9am - 5pm/i)).toBeInTheDocument();
    expect(screen.getByText(/Editar horarios/i)).toBeInTheDocument();
  });

  test("Cambia a modo edición al hacer clic en Editar", () => {
    render(
      <Provider store={store}>
        <Horarios />
      </Provider>
    );

    const editButton = screen.getByText(/Editar horarios/i);
    fireEvent.click(editButton);

    const input = screen.getByDisplayValue("Lunes a Viernes 9am - 5pm");
    expect(input).toBeInTheDocument();

    const saveButton = screen.getByText(/Guardar/i);
    expect(saveButton).toBeInTheDocument();
  });

  test("Guarda el nuevo horario en Redux", () => {
    render(
      <Provider store={store}>
        <Horarios />
      </Provider>
    );

    // Pasar a modo edición
    fireEvent.click(screen.getByText(/Editar horarios/i));

    const input = screen.getByDisplayValue("Lunes a Viernes 9am - 5pm");
    fireEvent.change(input, { target: { value: "Lunes a Domingo 8am - 6pm" } });

    fireEvent.click(screen.getByText(/Guardar/i));

    // Revisamos que el estado de Redux se haya actualizado
    const state = store.getState().shelter.info.horario;
    expect(state).toBe("Lunes a Domingo 8am - 6pm");

    // El modo edición se cierra y muestra el texto actualizado
    expect(screen.getByText(/Lunes a Domingo 8am - 6pm/i)).toBeInTheDocument();
  });
});