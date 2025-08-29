import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    nombre: "",
    telefono: "",
    codigoPostal: "",
    calle: "",
    numero: "",
    colonia: "",
    alcaldia: "",
    estado: "",
    responsable: "",
    reciben: "", 
    animalesResguardo: "",
    especieResguardo: "",
    adoptables: "",
    especieAdoptables: "",
    hogaresTemporales: "no",
    horario: "Lunes a Viernes 9am - 5pm", 
  },
  pets: {
    adoptables: [],
    temporales: [],
    apadrinables: [],
  },
};

const shelterSlice = createSlice({
  name: "shelter",
  initialState,
  reducers: {
    setStep1Data: (state, action) => {
      state.info = { ...state.info, ...action.payload };
    },
    setStep2Data: (state, action) => {
      state.info = { ...state.info, ...action.payload };
    },
    addPet: (state, action) => {
      const { category, pet } = action.payload;
      if (state.pets[category]) state.pets[category].push(pet);
    },
    setHorario: (state, action) => {
      state.info.horario = action.payload;
    },
  },
});

export const { setStep1Data, setStep2Data, addPet, setHorario } = shelterSlice.actions;
export default shelterSlice.reducer;