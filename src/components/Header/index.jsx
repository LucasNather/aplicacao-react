import React from "react";
import './style.css'

export function Header(){
    return(
        <header>
            <section className="container-topo">
                <img src="assets/logo.png" alt="logo oticas vida" className="img-logo"/>
                <nav className="navegacao">
                    <ul className="navegacao__lista">
                        <li><a href="#produtos" className="navegacao__link">Produtos</a></li>
                        <li><a href="#sobre" className="navegacao__link">Sobre</a></li>
                        <li><a href="#contato" className="navegacao__link">Contato</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}