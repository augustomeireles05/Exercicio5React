import './App.css';
import Familia from './components/children/Familia'
import Membro from './components/children/Membro'
import ParImpar from './components/children/condicional/ParImpar'
import UsuarioLogado from './components/children/condicional/UsuarioLogado';

import ListaProdutos from './components/lista/ListaProdutos'

import DigiteSeuNome from './components/DigiteSeuNome'

import CadastroNome from './components/classe/CadastroNome'

function App() {
  return (
    <div className="App">


      <CadastroNome nome="Meireles"/>


      <DigiteSeuNome />




      <ListaProdutos />


      <UsuarioLogado usuario={{nome: 'Augusto', email: 'augustomeireles05@gmail.com'}}  />
      <UsuarioLogado usuario={{nome: 'Amanda'}}  />


      <ParImpar num={2} />
      <ParImpar num={3} />
      <ParImpar  /> 
      {/* Deu false, por isso é impar */}
      {/* Tratando no lugar do props e fazer num = 0, traz outro resultado. */}


      <Familia>
        <Membro nome="Augusto" sobrenome="Meireles" />
        <Membro nome="Mário" sobrenome="Meireles" />
        <Membro nome="Débora" sobrenome="Meireles" />
      </Familia>

      <Familia>
        <Membro nome="Amanda" sobrenome="Martha" />
        <Membro nome="Alinne" sobrenome="Martha" />
      </Familia>

    </div>
  );
}

export default App;
