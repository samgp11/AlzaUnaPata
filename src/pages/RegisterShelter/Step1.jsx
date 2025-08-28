import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStep1Data } from "../../redux/slices/shelterSlice";

// 🔹 Contenedor principal
const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff7f0;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

// 🔹 Título
const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

// 🔹 Grupo de campos
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #444;
  }

  input,
  select {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
`;

// 🔹 Botón
const ContinueButton = styled.button`
  background-color: #ff914d;
  color: white;
  border: none;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: 0.3s ease;

  &:hover {
    background-color: #ff6f1f;
  }
`;

function Step1() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // 🔹 Mover dentro del componente

  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    dispatch(setStep1Data(formData)); // ✅ guardamos datos en Redux
    navigate("/registra-tu-refugio/step2"); // ✅ siguiente paso
  };

  return (
    <FormContainer>
      <Title>Registro de Refugio (1/3)</Title>
      <form onSubmit={handleContinue}>
        <FormGroup>
          <label>Nombre del refugio</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Código Postal</label>
          <input
            type="text"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Calle</label>
          <input
            type="text"
            name="calle"
            value={formData.calle}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Número</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Colonia</label>
          <input
            type="text"
            name="colonia"
            value={formData.colonia}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Alcaldía</label>
          <input
            type="text"
            name="alcaldia"
            value={formData.alcaldia}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Estado</label>
          <input
            type="text"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Humano Responsable</label>
          <input
            type="text"
            name="responsable"
            value={formData.responsable}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Reciben</label>
          <select
            name="reciben"
            value={formData.reciben}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            <option value="perros">Perros</option>
            <option value="gatos">Gatos</option>
            <option value="otro">Otro</option>
          </select>
        </FormGroup>

        <ContinueButton type="submit">Continuar</ContinueButton>
      </form>
    </FormContainer>
  );
}

export default Step1;