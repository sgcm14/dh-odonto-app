import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const isFavorite = false;

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="public/images/doctor.jpg" alt="" />
        <Link to={`/dentist/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{username}</p>
        {/*<button onClick={addFav} className="favButton"></button>*/}
        {
          !isFavorite ? (
              <button onClick={ addFav } className="favButton">☆</button>
          ) :  <button onClick={ addFav } className="favButton">⭐</button>
        }
    </div>
  );
};

export default Card;
