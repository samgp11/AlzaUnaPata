import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  max-width: 800px;
`;


const SectionImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;


const SectionText = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;


const SectionButton = styled.button`
  background-color: #ff914d;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #ff6f1f;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      {/* Sección 1 */}
      <Section>
        <SectionImage src="https://media.timeout.com/images/106004898/image.jpg" alt="Refugios" />
        <SectionText>¡No están solos!</SectionText>
        <p>
          Registra tu refugio con nosotros y creemos una comunidad de apoyo
          para los que lo necesitan.
        </p>
        <SectionButton onClick={() => navigate("/registra-tu-refugio")}>
          Registra tu refugio
        </SectionButton>
      </Section>

      {/* Sección 2 */}
      <Section>
        <SectionImage src="https://i0.wp.com/holanews.com/wp-content/uploads/2023/06/rss-efe2396e43ad07fb9bd9e153b41062d30236f1c3f38w.jpg?fit=1920%2C1280&ssl=1" alt="Donaciones" />
        <SectionText>¡Nos necesitan!</SectionText>
        <p>
          Con tu donativo puedes ayudar a refugios en el cuidado general de los
          animales o apadrinar el tratamiento de un refugiado en específico.
        </p>
        <SectionButton>Dona</SectionButton>
      </Section>

      {/* Sección 3 */}
      <Section>
        <SectionImage src="https://nupec.com/wp-content/uploads/2021/08/Captura-de-Pantalla-2021-08-02-a-las-12.23.44.png" alt="Voluntariado" />
        <SectionText>¡Tú haces la diferencia!</SectionText>
        <p>
          Si quieres ayudar pero no sabes cómo, ¡estás en el lugar correcto! Puedes
          apoyar presencialmente o con servicios profesionales.
        </p>
        <SectionButton>Sé voluntario</SectionButton>
      </Section>

      {/* Sección 4 */}
      <Section>
        <SectionImage src="https://placedog.net/400/300" alt="Adopciones" />
        <SectionText>¡Adopta a un amigo!</SectionText>
        <p>
          Ven y enamórate de nuestros adoptables, ¡encuentra a tu mejor amigo!
        </p>
        <SectionButton>Adopta</SectionButton>
      </Section>
    </HomeContainer>
  );
}

export default Home;