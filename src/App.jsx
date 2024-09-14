import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context.jsx";
import AppRoutes from "./Routes/AppRoutes.jsx";

function App() {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={`App ${state.theme}`}>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
