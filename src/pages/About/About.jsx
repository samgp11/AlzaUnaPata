import React from "react";

export default function About() {
  return (
    <main style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>¿Quiénes somos?</h1>
      <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
        Somos una plataforma dedicada a <strong>centralizar el registro de refugios de
        animales</strong> en un solo lugar. Nuestro objetivo es facilitar el acceso a
        información confiable para que más personas puedan ayudar, donar, adoptar
        o colaborar con los refugios que lo necesitan.
      </p>

      <section
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          borderRadius: 12,
          background: "#fafafa",
          border: "1px solid #e5e7eb",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Nuestra misión</h2>
        <p style={{ lineHeight: 1.6 }}>
          Conectar de manera simple y transparente a quienes desean ayudar con
          los refugios que protegen a cientos de animales cada día.
        </p>
      </section>

      <section
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          borderRadius: 12,
          background: "#fafafa",
          border: "1px solid #e5e7eb",
        }}
      >
        <h2 style={{ marginTop: 0 }}>¿Cómo lo hacemos?</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Permitiendo que los refugios se registren de forma rápida.</li>
          <li>Ofreciendo un directorio accesible y actualizado.</li>
          <li>Facilitando canales de contacto, adopción y donaciones.</li>
        </ul>
      </section>
    </main>
  );
}