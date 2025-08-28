import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPet } from "../../redux/slices/shelterSlice";

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
  select,
  textarea {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

const SaveButton = styled.button`
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

const Preview = styled.img`
  margin-top: 1rem;
  max-width: 200px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

// ------------------------
// Componente AddPet
// ------------------------
function AddPet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [petData, setPetData] = useState({
    photo: "",
    name: "",
    age: "",
    species: "",
    gender: "",
    size: "",
    story: "",
  });

  const handleChange = (e) => {
    setPetData({
      ...petData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejo de la foto
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPetData({ ...petData, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(addPet({ category: "adoptables", pet: petData }));
    console.log("Mascota agregada:", petData);
    navigate("/perfil-refugio");
  };

  return (
    <FormContainer>
      <Title>Agregar Mascota</Title>
      <form onSubmit={handleSave}>
        {/* Foto de la mascota */}
        <FormGroup>
          <label>Foto de perfil</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {petData.photo && <Preview src={petData.photo} alt="Preview mascota" />}
        </FormGroup>

        <FormGroup>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Edad</label>
          <input
            type="text"
            name="age"
            value={petData.age}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Especie</label>
          <input
            type="text"
            name="species"
            value={petData.species}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Sexo</label>
          <select name="gender" value={petData.gender} onChange={handleChange}>
            <option value="">Selecciona</option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Talla</label>
          <select name="size" value={petData.size} onChange={handleChange}>
            <option value="">Selecciona</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
            <option value="gigante">Gigante</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Historia de la mascota</label>
          <textarea
            name="story"
            value={petData.story}
            onChange={handleChange}
          ></textarea>
        </FormGroup>

        <SaveButton type="submit">Guardar</SaveButton>
      </form>
    </FormContainer>
  );
}

export default AddPet;