import React, { useState } from 'react'


function ParImpar({num = 0}) { 
    //se nenhuma props for passada, num será igual a zero.

    //POSSIBILIDADE 01:
        // let numero = 0
        // numero = props.num ? props.num : 0
        //Para isso, deve alterar o num = 0 para props e o num % 2 para numero % 2


    //POSSIBILIDADE 02:
        // let numero = 0
        // if (props.num) {
        //     numero = props.num
        // } else {
        //     numero = 0
        // }
        // da mesma forma, numero % 2 no lugar de num % 2. o props continua como parametro

    return ( 
         <div>
            <h2>O resultado é: </h2>
                {num % 2 == 0
                    ? <h3>Par</h3> //se verdadeira
                    : <h3>Ímpar</h3> //se falsa
                }
        </div>
        
    )
}

export default ParImpar