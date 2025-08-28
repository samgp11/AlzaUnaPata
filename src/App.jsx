import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Step1 from "./pages/RegisterShelter/Step1";
import Step2 from "./pages/RegisterShelter/Step2";
import Step3 from "./pages/RegisterShelter/Step3";
import Profile from "./pages/ShelterProfile/Profile"; // <- crearás después
import Login from "./pages/Login/Login";
import AddPet from "./pages/AddPet/AddPet";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/registra-tu-refugio" element={<Step1 />} />
        <Route path="/registra-tu-refugio/step2" element={<Step2 />} />
        <Route path="/registra-tu-refugio/step3" element={<Step3 />} />
        <Route path="/perfil-refugio" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agregar-mascota" element={<AddPet />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;