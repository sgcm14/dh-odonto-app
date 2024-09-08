import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getDentist = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await res.json();
    console.log(data);
    console.log(params);
    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  }, [params.id]);

  return (
    <div className="container">
      <h1>Detail Dentist {dentist.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Detail;