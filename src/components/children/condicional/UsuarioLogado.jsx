import React, { useState } from 'react'
import If from './If'


function UsuarioLogado(props) {

    const usuario = props.usuario || {}
     //Existe props.usuário? se sim, coloca dentro do usuario OU vazio: tratamento de erro


    return ( 
        <>
            <If test={usuario && usuario.nome && usuario.email}>
            {/* se o usuário existir e tiver nome e email, entra nessa condição */}
                <h2>Usuário Logado: </h2>
                <h3>
                    {usuario.nome} - {usuario.email}
                </h3>
            </If>
            <If test={!usuario || !usuario.nome || !usuario.email}>
                <h2>Bem vindo, <a href="#">faça seu login</a> </h2>
            </If>
        

            {/* A condição também poderia ser construída dessa forma, conforme demonstra abaixo: */}

            {/* {
             usuario && usuario.nome && usuario.email ?
                <div>
                    <h6>Segunda alternativa de condição</h6>
                    <h2>Usuário Logado:</h2>
                    <h3>
                        {usuario.nome} - {usuario.email}
                    </h3>
                </div>
             :
                <h2>
                    Bem-vindo, <a href="#">faça seu login</a>
                </h2>
            } */}



        </>
    )
}

export default  UsuarioLogado