import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context.jsx";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map((dentist) => (
            <Card key={dentist.id} {...dentist} />
          ))
        ) : (
          <p>No tienes favoritos guardados.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
