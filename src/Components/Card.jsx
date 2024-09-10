import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { ContextGlobal } from "../Components/utils/global.context.jsx";

const Card = ({ name, username, id }) => {
  const { state, addToFavorites, removeFromFavorites } = useContext(ContextGlobal);
  const isFavorite = state.favorites.some((dentist) => dentist.id === id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (isFavorite) {
      removeFromFavorites({ id });
      alert("El dentista fue removido de favoritos.");
    } else {
      addToFavorites({ id, name, username });
      alert("Dentista guardado en favoritos.");
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src="/images/doctor.jpg" alt="" />
      <Link to={routes.detail.replace(":id", id)}>
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
