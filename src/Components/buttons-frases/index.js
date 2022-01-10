

import { Link } from "react-router-dom";
import Buttfrases from "./styled";

export default function buttons() {
  return (
    <Buttfrases>
      <div className="Buttons">
        <div className="button-voltar">
          <Link to= "/"><button>Voltar</button></Link>
        </div>
      </div>
    </Buttfrases>
  );
}

