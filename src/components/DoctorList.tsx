import React, { useEffect, useState } from "react";
import { fetchDoctors } from "../services/apiService";

interface Doctor {
  id: number;
  rut: string;
  fname: string;
  lname: string;
  age: number;
  specialty_name: string;
  photo: string;
  available: boolean;
  experience: number;
  contact: {
    phone: number;
    email: string;
  };
  hours: {
    am: string;
    pm: string;
  };
  biography: string;
}

const DoctorList: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
      } catch (err) {
        setError("Error al cargar los doctores.");
      }
    };

    getDoctors();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (doctors.length === 0) {
    return <p>Cargando doctores...</p>;
  }

  return (
    <div>
      <h2>Lista de Doctores</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              maxWidth: "300px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={doctor.photo}
              alt={`${doctor.fname} ${doctor.lname}`}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{`${doctor.fname} ${doctor.lname}`}</h3>
            <p><strong>Especialidad:</strong> {doctor.specialty_name}</p>
            <p><strong>RUT:</strong> {doctor.rut}</p>
            <p><strong>Edad:</strong> {doctor.age}</p>
            <p><strong>Experiencia:</strong> {doctor.experience} años</p>
            <p><strong>Contacto:</strong> {doctor.contact.email}</p>
            <p><strong>Teléfono:</strong> {doctor.contact.phone}</p>
            <p><strong>Horario:</strong> AM: {doctor.hours.am}, PM: {doctor.hours.pm}</p>
            <p><strong>Biografía:</strong> {doctor.biography}</p>
            <p style={{ color: doctor.available ? "green" : "red" }}>
              <strong>{doctor.available ? "Disponible" : "No Disponible"}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
