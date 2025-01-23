import React, { useState } from "react";


const PatientForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert(`Paciente registrado: ${name}, Edad: ${age}`);
    setName("");
    setAge("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Edad:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default PatientForm;