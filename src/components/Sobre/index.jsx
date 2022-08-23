import React from 'react'
import './style.css'

export function Sobre(){
    return(
        <div id='sobre'>
            <section className="container-sobre">
                <h2>Quem somos nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div className="container-sobre__card">
                    <div className='container-sobre__assunto'>
                        <img src="assets/loja.png" alt="loja" />
                        <div>
                            <h3>Nossas Filiais</h3>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                        </div>
                    </div>
                    <div className='container-sobre__assunto'>
                         <img src="assets/atendimento.png" alt="atendimento" />
                        <div>
                            <h3>Atendimento flexível</h3>
                            <p>Nossa equipe possui é treinada para te atender</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}