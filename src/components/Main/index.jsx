import React from "react";
import { Banner } from '../Banner'
import { Produtos } from "../Produtos";
import { Sobre } from "../Sobre";
import { Contato } from "../Contato";

export function Main(){
    return(
        <main>
            <Banner/>
            <Produtos/>
            <Sobre/>
            <Contato/>
        </main>
    )
}