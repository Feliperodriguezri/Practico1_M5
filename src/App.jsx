// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './assets/components/table';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('public/data.json'); // Usamos ruta relativa para el json
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      setError('Hubo un error al obtener los datos. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); //  El array vacio como dependencia solo ejecuta el efecto al montar el componente

  const handleRetry = () => {
    fetchData();
  }

  return (
    <div className="container mt-4">
      <h1>Lista de Médicos</h1>
      {loading && <p>Cargando datos...</p>}
      {error && (
        <div>
          <p className="text-danger">{error}</p>
          <button className="btn btn-primary" onClick={handleRetry}>Reintentar</button>
        </div>
      )}
      {!loading && !error && <Table data={data} />}
      <button className="btn btn-secondary mt-3" onClick={fetchData}>Recargar Lista</button>
    </div>
  );
}

export default App;
