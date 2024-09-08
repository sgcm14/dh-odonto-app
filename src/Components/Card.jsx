import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Revisamos si el dentista ya está en localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = storedFavorites.some((dentist) => dentist.id === id);
    setIsFavorite(isFav);
  }, [id]);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      // Si ya es favorito, lo removemos de favoritos
      const updatedFavorites = storedFavorites.filter(
        (dentist) => dentist.id !== id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      alert("El dentista fue removido de favoritos.");
    } else {
      // Si no es favorito, lo agregamos
      storedFavorites.push({ id, name, username });
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
      setIsFavorite(true);
      alert("Dentista guardado en favoritos.");
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src="/images/doctor.jpg" alt="" />
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <button onClick={addFav} className="favButton">
        {isFavorite ? "⭐" : "☆"}
      </button>
    </div>
  );
};

export default Card;
