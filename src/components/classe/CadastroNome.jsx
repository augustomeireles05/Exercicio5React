import React, { Component } from 'react';

//Componentes baseado em classes


class CadastroNome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: ''
        }
    }
    
    //Render é um método do React que retorna trecho JSX
    render() {
        // return <h1>Olá, {this.props.nome}</h1>

        return (
            <div>
                <h2>{this.state.nome}</h2>
                <input type="text"
                    placeholder="Digite seu nome"
                    value={this.state.nome}
                    onChange={(event) => this.setState({nome: event.target.value})}
                    />
            </div>
        )
    }

}

export default CadastroNome