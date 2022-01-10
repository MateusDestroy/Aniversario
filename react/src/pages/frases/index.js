import Frases from "./styled";
import Buttfrases from "../../Components/buttons-frases/index";

export default function frases() {
  return (
    <Frases>
      <div className="conteiner-frases">
        <div className="bloco-filo">
          <div className="titulo">Sócrates</div>
          <div className="frase">"O mais provável é que nenhum de nós saiba coisa alguma; mas alguns pensam saber, enquanto eu tenho consciência de que nada sei (…)"</div>
        </div>


        <div className="bloco-filo">
          <div className="titulo">Aristóteles</div>
          <div className="frase">A educação tem raízes amargas, mas os seus frutos são doces.</div>
        </div>



        <div className="bloco-filo">
          <div className="titulo">Platão</div>
          <div className="frase">Tente mover o mundo – o primeiro passo será mover a si mesmo.</div>
        </div>
        <Buttfrases />
      </div>
    </Frases>
  );
}
