import React from "react";
import PatientForm from "./components/PatientForm";
import DoctorList from "./components/DoctorList";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div>
      <h1>Sistema del Hospital</h1>
      <PatientForm />
      <DoctorList />
    </div>
  );
};

export default App;
