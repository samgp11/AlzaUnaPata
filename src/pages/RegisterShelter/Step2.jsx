import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStep2Data } from "../../redux/slices/shelterSlice";

// ------------------------
// Styled-components
// ------------------------
const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff7f0;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.secondary ? "#ccc" : "#ff914d")};
  color: ${(props) => (props.secondary ? "#333" : "white")};
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#aaa" : "#ff6f1f")};
  }
`;

// ------------------------
// Componente Step2
// ------------------------
function Step2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    animalesResguardo: "",
    especieResguardo: "",
    adoptables: "",
    especieAdoptables: "",
    hogaresTemporales: "no",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    dispatch(setStep2Data(formData)); // ✅ guardamos en Redux
    navigate("/registra-tu-refugio/step3"); // ✅ siguiente paso
  };

  const handleBack = () => {
    navigate("/registra-tu-refugio"); // volver a Step1
  };

  return (
    <FormContainer>
      <Title>Registro de Refugio (2/3)</Title>
      <form onSubmit={handleContinue}>
        <FormGroup>
          <label>¿Cuántos animales se encuentran bajo tu resguardo?</label>
          <input
            type="number"
            name="animalesResguardo"
            value={formData.animalesResguardo}
            onChange={handleChange}
            min="0"
          />
        </FormGroup>

        <FormGroup>
          <label>Especie</label>
          <input
            type="text"
            name="especieResguardo"
            value={formData.especieResguardo}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>¿Cuántos se encuentran en calidad de ADOPTABLES?</label>
          <input
            type="number"
            name="adoptables"
            value={formData.adoptables}
            onChange={handleChange}
            min="0"
          />
        </FormGroup>

        <FormGroup>
          <label>Especie</label>
          <input
            type="text"
            name="especieAdoptables"
            value={formData.especieAdoptables}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>¿Solicitas hogares temporales?</label>
          <select
            name="hogaresTemporales"
            value={formData.hogaresTemporales}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </FormGroup>

        <ButtonGroup>
          <Button type="button" secondary onClick={handleBack}>
            Atrás
          </Button>
          <Button type="submit">Continuar</Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
}

export default Step2;