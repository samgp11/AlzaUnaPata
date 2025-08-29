import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
`;

const CoverPhoto = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ src }) => (src ? `url(${src})` : "#ccc")} center/cover no-repeat;
  position: relative;
  margin-bottom: 20px;
`;

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 12px;
  cursor: pointer;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProfileInfo = styled.div``;

const Schedule = styled.div`
  margin-bottom: 20px;
`;

const ScheduleTitle = styled.h3`
  margin-bottom: 5px;
`;

const GallerySection = styled.div`
  margin-bottom: 20px;
`;

const GalleryTitle = styled.h4`
  margin-bottom: 10px;
`;

const GalleryGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const GalleryItem = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 6px 12px;
  cursor: pointer;
`;

function Profile() {
  const navigate = useNavigate();

  const shelter = useSelector((state) => state.shelter || {});
  const { info = {}, pets = {} } = shelter;
  const { adoptables = [], temporales = [], apadrinables = [] } = pets;

  const [cover] = useState(null);
  const [profilePic] = useState(null);
  const [schedule] = useState("Lunes a Viernes, 10am - 6pm");

  return (
    <Container>
      {/* Portada */}
      <CoverPhoto src={cover}>
        <EditButton onClick={() => alert("Subir nueva portada")}>
          Editar portada
        </EditButton>
      </CoverPhoto>

      {/* Perfil */}
      <ProfileSection>
        <ProfileImage src={profilePic || "https://placehold.co/120"} />
        <ProfileInfo>
          <h2>{info.nombre || "Refugio Esperanza Animal 🐾"}</h2>
          <p>{info.alcaldia || "Alcaldía Benito Juárez, CDMX"}</p>
          <EditButton onClick={() => alert("Cambiar foto de perfil")}>
            Editar perfil
          </EditButton>
        </ProfileInfo>
      </ProfileSection>

      {/* Horarios */}
      <Schedule>
        <ScheduleTitle>Horarios Disponibles</ScheduleTitle>
        <p>{schedule}</p>
        <EditButton onClick={() => alert("Editar horarios")}>
          Editar horarios
        </EditButton>
      </Schedule>

      {/* Galerías */}
      <GallerySection>
        <GalleryTitle>Mascotas Adoptables</GalleryTitle>
        <GalleryGrid>
          {adoptables.length > 0
            ? adoptables.map((pet, index) => (
                <GalleryItem
                  key={index}
                  src={pet.photo || "https://placehold.co/200"}
                />
              ))
            : <p>No hay mascotas adoptables aún.</p>}
        </GalleryGrid>
        <AddButton onClick={() => navigate("/agregar-mascota")}>
          + Agregar mascota
        </AddButton>
      </GallerySection>

      <GallerySection>
        <GalleryTitle>Mascotas en Hogar Temporal</GalleryTitle>
        <GalleryGrid>
          {temporales.length > 0
            ? temporales.map((pet, index) => (
                <GalleryItem
                  key={index}
                  src={pet.photo || "https://placehold.co/200"}
                />
              ))
            : <p>No hay mascotas en hogar temporal.</p>}
        </GalleryGrid>
        <AddButton onClick={() => navigate("/agregar-mascota")}>
          + Agregar mascota
        </AddButton>
      </GallerySection>

      <GallerySection>
        <GalleryTitle>Mascotas Apadrinables</GalleryTitle>
        <GalleryGrid>
          {apadrinables.length > 0
            ? apadrinables.map((pet, index) => (
                <GalleryItem
                  key={index}
                  src={pet.photo || "https://placehold.co/200"}
                />
              ))
            : <p>No hay mascotas apadrinables.</p>}
        </GalleryGrid>
        <AddButton onClick={() => navigate("/agregar-mascota")}>
          + Agregar mascota
        </AddButton>
      </GallerySection>
    </Container>
  );
}

export default Profile;