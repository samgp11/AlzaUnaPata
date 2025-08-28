import React from "react";

export default function Login() {
  return (
    <main style={{ maxWidth: 500, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Inicio de sesión</h1>
      <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
        Aquí podrás acceder al panel de tu refugio una vez que hayas completado
        el registro. Desde allí podrás administrar tu perfil, actualizar la
        información y añadir a los animales disponibles para adopción.
      </p>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          borderRadius: 12,
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          textAlign: "center",
        }}
      >
        <p>
          🔐 El módulo de inicio de sesión estará disponible próximamente.  
          Mientras tanto, si eres un refugio, puedes comenzar tu registro desde
          la opción <strong>"Registra tu refugio"</strong>.
        </p>
      </div>
    </main>
  );
}