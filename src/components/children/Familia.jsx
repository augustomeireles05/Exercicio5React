import React, { useState } from 'react'
import Membro from './Membro'

function Familia(props) {



    return ( 
        <>
            <h2>[Início] Membros da Família</h2>
                {props.children} 
            <h2>[Fim] Membros da Família</h2>
        </>
    )
}

export default Familia

//children é do próprio react. O react traz pronto essa propriedade children.
//Se formos nos arquivos fontes do react, eles disponibilizam o children para encaixar dentro do props.
//O children permite que possamos passar outros componentes dentro de familia.