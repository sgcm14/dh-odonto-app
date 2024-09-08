import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import { ContextGlobal } from "./Components/utils/global.context.jsx";

function App() {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={`App ${state.theme}`}>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.notFound} element={<h1>Página no encontrada</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
