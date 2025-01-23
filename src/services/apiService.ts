const API_URL = "https://capacitaenlinea.cl/demodoctorapi/index.php";

export const fetchDoctors = async () => {
  try {
    const response = await fetch(`${API_URL}/doctors?key=mab25`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Retorna los datos sin procesar
  } catch (error) {
    console.error("Error al obtener los datos de la API:", error);
    throw error;
  }
};
