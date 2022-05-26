import React from "react";

import "./styles.scss";

const Cashless = () => {
  return (
    <div className="cashless">
      <h1>Sistema Cashless</h1>
      <p>
        Ao comprares os teus bilhetes ou passe geral vais receber uma mensagem
        com um link, que é o teu acesso e tem de ser associado a uma pulseira.
      </p>
      <p>
        A pulseira além de ser o teu bilhete, também vai ser a tua carteira
        digital.
      </p>
      <p>
        Através do link que recebeste por mensagem, podes aceder aos teus dados
        e carregar a tua carteira digital.
      </p>
      <p>
        <span>ATENÇÃO!</span> Não existe devolução de dinheiro que tenha ficado
        na pulseira. Não dês o teu link a ninguém! Podes ficar sem o dinheiro!
      </p>
    </div>
  );
};

export default Cashless;
