import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context.jsx";

// Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favorites.length > 0 ? (
          state.favorites.map((dentist) => (
            <Card key={dentist.id} {...dentist} />
          ))
        ) : (
          <p>No tienes favoritos guardados.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
