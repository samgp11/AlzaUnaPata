import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setHorario } from "../../redux/slices/shelterSlice";

// ------------------------
// Styled-components
// ------------------------
const HorariosContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  background-color: #fff7f0;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

const HorarioText = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
`;

const HorarioInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
`;

const EditButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ff914d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    background-color: #ff6f1f;
  }
`;

// ------------------------
// Componente Horarios
export default function Horarios() {
  const horarioGlobal = useSelector((state) => state.shelter.info.horario);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [nuevoHorario, setNuevoHorario] = useState(horarioGlobal);

  const handleSave = () => {
    dispatch(setHorario(nuevoHorario));
    setEditMode(false);
  };

  return (
    <HorariosContainer>
      <Title>Horarios disponibles</Title>
      {editMode ? (
        <>
          <HorarioInput
            type="text"
            value={nuevoHorario}
            onChange={(e) => setNuevoHorario(e.target.value)}
          />
          <EditButton onClick={handleSave}>Guardar</EditButton>
        </>
      ) : (
        <>
          <HorarioText>{horarioGlobal}</HorarioText>
          <EditButton onClick={() => setEditMode(true)}>Editar horarios</EditButton>
        </>
      )}
    </HorariosContainer>
  );
}