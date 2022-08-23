import React from "react";
import './style.css'

export function Produtos() {
    return(
        <section id="produtos">
            <div className="container-produtos__descricao">
                <h2 className="container-produtos__titulo">Nossos produtos</h2>
                <p className="container-produtos__paragrafo">Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p className="container-produtos__paragrafo">Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>

            <div className="container-produtos__oculos">
                <div className="container-produtos__card">
                    <h3>Óculos de grau</h3>
                    <img src="assets/oculos01.png" alt="Óculos de grau" />
                    <h4>R$ 500,00</h4>
                </div>
                <div className="container-produtos__card">
                    <h3>Óculos transition</h3>
                    <img src="assets/oculos03.png" alt="Óculos transition" />
                    <h4>R$ 750,00</h4>
                </div>
                <div className="container-produtos__card">
                     <h3>Óculos de sol</h3>
                    <img src="assets/oculos03.png" alt="Óculos de sol" />
                    <h4>R$ 700,00</h4>
                </div>
                <div className="container-produtos__card">
                    <h3>Óculos infantil</h3>
                    <img src="assets/oculos04.png" alt="Óculos infantil" />
                    <h4>R$ 500,00</h4>
                </div>
            </div>

            <div className="container-produtos__lista">
                <p className="container-produtos__lista-paragrafo">Todos os nossos produtos incluem:</p>
                <ul>
                    <li className="container-produtos__lista-item">Garantia de 1 ano</li>
                    <li className="container-produtos__lista-item">Manutenção preventiva</li>
                    <li className="container-produtos__lista-item">Descontos especiais na compra da segunda unidade</li>
                    <li className="container-produtos__lista-item">Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}