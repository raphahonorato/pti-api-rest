let produtos = []
let idProduct = 1

const dataAtual = new Date()
const dataFormatada = dataAtual.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
})


function criarProduto(nome, preco) {

    const novoProduto = {
        id: idProduct++,
        nome,
        preco,
        criadoEm: dataFormatada,
        atualizadoEm: dataFormatada,
    }
    produtos.push(novoProduto)

    return { mensagem: 'Produto criado com sucesso!', novoProduto }

}


function listarProduto(nome) {
    if (!nome) {
        return { message: "Nome do produto não informado!" };
    }

    const produtosEncontrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(nome.toLowerCase())
    )

    if (produtosEncontrados.length === 0) {
        return { message: "Produto não encontrado!" };
    }

    return produtosEncontrados;
}


function editarProduto(id, dadosAtualizados) {
    const produtoIndex = produtos.findIndex(produto => produto.id === id);

    if (produtoIndex === -1) {
        return { message: "Produto não encontrado!" };
    }

    produtos[produtoIndex] = { ...produtos[produtoIndex], ...dadosAtualizados };

    return {
        mensagem: "Produto atualizado com sucesso!",
        produto: produtos[produtoIndex]
    }
}


function apagarProduto(id) {
    const produtoIndex = produtos.findIndex(produto => produto.id === id);

    if (produtoIndex === -1) {
        return { message: "Produto não encontrado" };
    }

    const produtoRemovido = produtos.splice(produtoIndex, 1);

    return {
        message: "Produto removido com sucesso!",
        produto: produtoRemovido[0]
    };
}


module.exports = {
    criarProduto,
    listarProduto,
    editarProduto,
    apagarProduto
}