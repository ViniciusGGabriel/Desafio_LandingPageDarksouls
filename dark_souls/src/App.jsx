import { useState } from "react";
import { useSpring, animated } from "react-spring";
import DS1 from "./components/DS1/DS1";
import DS2 from "./components/DS2/DS2";
import DS3 from "./components/DS3/DS3";

function App() {
  /* Coloca o valor de 1 nas constantes */
  const [compoAtual, setNewCompo] = useState(1);
  /* Inserindo uma animação por meio da biblioteca spring*/
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });
  /* Faz o valor "dompoAtual ficar entre 1,2 ou 0 e 3 para ficar alternando" */
  const alternarComp = () => {
    setNewCompo((compoAtual % 3) + 1);
  };
  /* Cria uma variável para um case */
  let componente;
  let componenteName;
  /* Caso compoAtual estava em 1 aparece o componente 1 e consecutivamente */
  switch (compoAtual) {
    case 1:
      componente = <DS1 />;
      componenteName = "Dark Souls 2";
      break;
    case 2:
      componente = <DS2 />;
      componenteName = "Dark Souls 3";
      break;
    case 3:
      componente = <DS3 />;
      componenteName = "Dark Souls 1";
      break;
    default:
      componente = null;
  }

  return (
    <>
      {/* Tela de inicio */}
      <div className="bg-Img">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="titleApp">DARK SOULS</h1>
          <span className="textApp">
            "Dark Souls" é uma série de jogos de RPG de ação desenvolvida pela
            FromSoftware e publicada pela Bandai Namco Entertainment. Lançada
            pela primeira vez em 2011, a série ganhou notoriedade por sua
            dificuldade desafiadora, narrativa enigmática e jogabilidade
            envolvente e atualmente contem 3 jogos que formam a franquia.
          </span>
        </div>
      </div>

      {/* Botão que troca os componentes  */}
      <div className="carroselDS">
        <button onClick={alternarComp}>
          <a className="btn">
            <span className="spn2">{componenteName}</span>
          </a>
        </button>
      </div>

      {/* Local onde o componente será colocado e animado*/}
      <animated.div style={props}>{componente}</animated.div>
    </>
  );
}

export default App;
