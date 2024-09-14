import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { ContextGlobal } from "../Components/utils/global.context.jsx";

const Card = ({ name, username, id }) => {
  const { state, addToFavorites, removeFromFavorites } =
    useContext(ContextGlobal);
  const isFavorite = state.favorites.some((dentist) => dentist.id === id);

  const addFav = () => {
    if (isFavorite) {
      removeFromFavorites({ id });
      setTimeout(() => alert("El dentista fue removido de favoritos."), 0);
    } else {
      addToFavorites({ id, name, username });
      setTimeout(() => alert("Dentista guardado en favoritos."), 0);
    }
  };

  return (
    <div className="card">
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
