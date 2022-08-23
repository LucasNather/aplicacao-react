import React from "react";
import './style.css'

export function Contato(){
    return(
        <div id="contato">
            <section className="container-contato">
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="container-contato__listas">
                    <ul className="container-contato__lista">
                        <li className="container-contato__lista-titulo">Contato</li>
                        <li className="container-contato__lista-item">
                            <img src="assets/local.png" alt="local" />
                            Nova Iguaçu, RJ
                        </li>
                        <li className="container-contato__lista-item">
                            <img src="assets/telefone.png" alt="telefone" />
                            (21) 9999-9999
                        </li>
                        <li className="container-contato__lista-item">
                            <img src="assets/email.png" alt="email" />
                            contato@oticavida.com
                        </li>
                    </ul>

                    <ul className="container-contato__lista">
                        <li className="container-contato__lista-titulo">Nossas Redes Sociais</li>
                        <li className="container-contato__lista-item">
                            <img src="assets/fb.png" alt="facebook" />
                            /OticaVida
                        </li>
                        <li className="container-contato__lista-item">
                            <img src="assets/ig.png" alt="instagram" />
                            @oticavidarj
                        </li>
                        <li className="container-contato__lista-item">
                             <img src="assets/tt.png" alt="twitter" />
                             @oticavidarj
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}