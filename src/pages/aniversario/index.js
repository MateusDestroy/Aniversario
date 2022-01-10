import Aniversario from "./styled";
import Buttfrases from "../../Components/buttons-frases/index";

export default function frases() {
  return (
    <Aniversario>
      <div className="conteiner-frases">
        <div className="bloco-filo">
          <div className="titulo">Parabéns Pai</div>
          <div className="frase">Que Deus lhe conceda bençãos e um caminho iluminado. Que Ele te permita viver grandes vitórias.
Viva cada momento com amor, liberdade, ousadia, responsabilidade, garra, vontade, sabedoria, discernimento, honestidade, oportunidades e alegria.</div>
        </div>

        <Buttfrases />
      </div>
    </Aniversario>
  );
}
