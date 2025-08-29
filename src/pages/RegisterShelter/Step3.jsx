import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStep1Data, setStep2Data } from "../../redux/slices/shelterSlice";


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

const Text = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #555;
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


function Step3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const shelter = useSelector((state) => state.shelter || {});
  const { info = {} } = shelter;

  const handleBack = () => {
    navigate("/registra-tu-refugio/step2");
  };

  const handleFinish = () => {
    
    dispatch(setStep1Data(info));
    dispatch(setStep2Data(info));

    console.log("Registro finalizado");
    navigate("/perfil-refugio");
  };

  return (
    <FormContainer>
      <Title>Registro de Refugio (3/3)</Title>
      <Text>
        ¡Estás a un paso de finalizar! <br />
        Revisa que tus datos sean correctos y completa el registro.
      </Text>

      <ButtonGroup>
        <Button type="button" secondary onClick={handleBack}>
          Atrás
        </Button>
        <Button type="button" onClick={handleFinish}>
          Finalizar Registro
        </Button>
      </ButtonGroup>
    </FormContainer>
  );
}

export default Step3;