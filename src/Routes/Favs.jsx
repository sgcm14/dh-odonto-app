import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Actualizar la lista de favoritos cuando se elimina alguno
  const handleFavoriteUpdate = () => {
    const updatedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(updatedFavorites);
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card
              key={dentist.id}
              {...dentist}
              onFavoriteUpdate={handleFavoriteUpdate}
            />
          ))
        ) : (
          <p>No tienes favoritos guardados.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
