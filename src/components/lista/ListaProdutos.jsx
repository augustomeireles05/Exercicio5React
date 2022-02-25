import produtos from './produtos'


function ListaProdutos(props) {


    // const produtos = [
    //     { id: 1, nome: 'Banana da terra', preco: 12.90 },
    //     { id: 2, nome: 'Vinho Argentino Orgânico', preço: 89.90 },
    //     { id: 3, nome: 'Sal do Himalaia', preco: 9.90 },
    //     { id: 4, nome: 'Suco de Manga Native', preco: 15.90 },
    //     { id: 5, nome: 'Mel Orgânico Silvestre', preco: 61.40 }
    // ]
    //Para utilizar isso, não precisaria do import nem do arquivo produto.jsx



    function exibirLista() {
        return produtos.map(p => {
            return (
               <li key={p.id}>
                    <h3>
                        <div>ID: #{p.id}</div> 
                        <div>Produto: {p.nome}</div>
                        <div> Preço: R$ {p.preco}</div>
                    </h3>
                </li>
            )
        })
    }



    return ( 
        <>
            <h2>Lista de Produtos:</h2>
            <ul>
                {exibirLista()}
            </ul>
        </>
    )
}

export default ListaProdutos