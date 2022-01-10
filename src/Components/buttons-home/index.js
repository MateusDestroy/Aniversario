import Buttons from "./styled";
import { Link } from "react-router-dom";


export default function buttons() {
  return (
    <Buttons>
      <div className="Buttons">
        <div className="button1">
          <Link to = "/Frases"> <button>Frases</button></Link>
        </div>

        <div className="button2">
         <Link to = "/Aniversario"> <button>Aniversario</button></Link> 
        </div>
      </div>
    </Buttons>
  );
}
