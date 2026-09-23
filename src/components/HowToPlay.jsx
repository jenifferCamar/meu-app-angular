import React from 'react';

const steps = [
  ['01', 'Leia o ritmo', 'O bloco cruza a torre de um lado para o outro. Cada nível acelera um pouco.'],
  ['02', 'Solte no ponto', 'Clique no tabuleiro, no botão ou aperte espaço para posicionar o bloco.'],
  ['03', 'Busque o combo', 'Encaixes precisos dão bônus e aumentam seu combo. Um erro encerra a rodada.'],
];

export default function HowToPlay() {
  return (
    <section className="how-to-play" id="como-jogar">
      <div className="how-heading">
        <p className="eyebrow">Como jogar</p>
        <h2>Fácil de começar.<br /><em>Difícil de largar.</em></h2>
      </div>

      <div className="steps-list">
        {steps.map(([number, title, text]) => (
          <article className="step" key={number}>
            <span className="step-number">{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
