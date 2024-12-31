import React from 'react';

const Table = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No hay datos para mostrar.</p>;
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Especialidad</th>
                    <th>Años Experiencia</th>
                    <th>Atención</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.especialidad}</td>
                        <td>{item.añosExperiencia}</td>
                        <td>{item.atencion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;