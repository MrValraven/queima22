import React from "react";

import "./styles.scss";

const Precario = () => {
  return (
    <div className="precario">
      <h1>Preçário Passes Gerais</h1>
      <div className="container">
        <h2>SÓCIOS E BOLSEIROS*</h2>
        <div>
          <p className="data">&#62;&#62; 1º PRÉ-VENDA &#62; 20 MAIO</p>
          <p className="preco">40€</p>
        </div>
        <div>
          <p className="data">&#62;&#62; 2º PRÉ-VENDA &#62; 21 A 26 MAIO</p>
          <p className="preco">45€</p>
        </div>
        <div>
          <p className="data">
            &#62;&#62; VENDA REGULAR &#62; 27 MAIO A 3 JUNHO
          </p>
          <p className="preco">50€</p>
        </div>
      </div>
      <div className="container">
        <h2>EST. UNIVERSITÁRIOS & FUNCIONÁRIOS DA UE *</h2>
        <div>
          <p className="data">&#62;&#62; 20 MAIO &#62; 3 JUNHO</p>
          <p className="preco">60€</p>
        </div>
      </div>
      <div className="container">
        <h2>NÃO ESTUDANTE *</h2>
        <div>
          <p className="data">&#62;&#62; 20 MAIO &#62; 3 JUNHO</p>
          <p className="preco">70€</p>
        </div>
      </div>
    </div>
  );
};

export default Precario;
