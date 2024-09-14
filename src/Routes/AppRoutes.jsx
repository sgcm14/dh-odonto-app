import { Routes, Route } from "react-router-dom";
import { routes } from "../Components/utils/routes";
import Home from "./Home";
import Contact from "./Contact";
import Favs from "./Favs";
import Detail from "./Detail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.favs} element={<Favs />} />
      <Route path={routes.detail} element={<Detail />} />
      <Route path={routes.notFound} element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
};

export default AppRoutes;
