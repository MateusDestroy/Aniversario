import { Routes, Route } from "react-router-dom";

import Pai from "./pages/Pai/index";
import Frases from "./pages/frases/index";
import Aniversario from "./pages/aniversario/index";

export default function routes() {
  return (
    <Routes>
      <Route path="" exact={true} element={<Pai />} />
      <Route path="/Frases" element={<Frases />} />
      <Route path="/Aniversario" element={<Aniversario />} />
    </Routes>
  );
}
