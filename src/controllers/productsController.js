const { executeQuery } = require('../database/database');

async function criarProduto(nome, preco, quantidadeEstoque, marca, modelo, garantiaMeses) {
    try {
        const sql = `INSERT INTO produtos (nome, preco, quantidadeEstoque, marca, modelo, garantiaMeses) 
                     VALUES (?, ?, ?, ?, ?, ?)`;

        const result = await executeQuery(sql, [
            nome,
            preco,
            quantidadeEstoque,
            marca,
            modelo,
            garantiaMeses,
        ]);

        return {
            mensagem: 'Produto criado com sucesso!',
            novoProduto: {
                id: result.insertId,
                nome,
                preco,
                quantidadeEstoque,
                marca,
                modelo,
                garantiaMeses,
            },
        };
    } catch (err) {
        console.error('Erro ao criar o produto:', err.message);
        throw err;
    }
}

async function listarProduto(nome) {
    try {
        if (!nome) {
            return { mensagem: 'Nome do produto não informado!' };
        }

        const sql = `SELECT * FROM produtos WHERE nome LIKE ?`;
        const produtosEncontrados = await executeQuery(sql, [`%${nome}%`]);

        if (produtosEncontrados.length === 0) {
            return { mensagem: 'Produto não encontrado!' };
        }

        return produtosEncontrados;
    } catch (err) {
        console.error('Erro ao listar produtos:', err.message);
        throw err;
    }
}

async function editarProduto(id, dadosAtualizados) {
    try {
        if (!id) {
            return { mensagem: 'ID do produto não informado!' };
        }

        const camposAtualizados = Object.keys(dadosAtualizados);
        const valoresAtualizados = camposAtualizados.map(campo => dadosAtualizados[campo]);
        const setClause = camposAtualizados.map(campo => `${campo} = ?`).join(', ');

        const sql = `UPDATE produtos SET ${setClause} WHERE id = ?`;
        const result = await executeQuery(sql, [...valoresAtualizados, id]);

        if (result.affectedRows === 0) {
            return { mensagem: 'Produto não encontrado!' };
        }

        return {
            mensagem: 'Produto atualizado com sucesso!',
            id,
            dadosAtualizados,
        };
    } catch (err) {
        console.error('Erro ao atualizar o produto:', err.message);
        throw err;
    }
}

async function apagarProduto(id) {
    try {
        if (!id) {
            return { mensagem: 'ID do produto não informado!' };
        }

        const sql = `DELETE FROM produtos WHERE id = ?`;
        const result = await executeQuery(sql, [id]);

        if (result.affectedRows === 0) {
            return { mensagem: 'Produto não encontrado!' };
        }

        return {
            mensagem: 'Produto removido com sucesso!',
            id,
        };
    } catch (err) {
        console.error('Erro ao remover o produto:', err.message);
        throw err;
    }
}

module.exports = {
    criarProduto,
    listarProduto,
    editarProduto,
    apagarProduto,
};



// const connection = require('../database/database')

// async function criarProduto(nome, preco, quantidadeEstoque, marca, modelo, garantiaMeses) {
//     try {
//         const conexao = await connection.connect();
//         const sql = `INSERT INTO produtos (nome, preco, quantidadeEstoque, marca, modelo, garantiaMeses) VALUES (?, ?, ?, ?, ?, ?)`;

//         const [result] = await conexao.execute(sql, [
//             nome,
//             preco,
//             quantidadeEstoque,
//             marca,
//             modelo,
//             garantiaMeses,
//         ]);

//         return {
//             mensagem: 'Produto criado com sucesso!',
//             novoProduto: {
//                 id: result.insertId,
//                 nome,
//                 preco,
//                 quantidadeEstoque,
//                 marca,
//                 modelo,
//                 garantiaMeses,
//             },
//         };
//     } catch (err) {
//         console.error('Erro ao criar o produto:', err.message);
//         throw err;
//     }
// }

// async function listarProduto(nome) {
//     try {
//         const conexao = await connection.connect();

//         if (!nome) {
//             return { mensagem: "Nome do produto não informado!" };
//         }

//         const sql = `SELECT * FROM produtos WHERE nome LIKE ?`;
//         const [produtosEncontrados] = await conexao.execute(sql, [`%${nome}%`]);

//         if (produtosEncontrados.length === 0) {
//             return { mensagem: "Produto não encontrado!" };
//         }

//         return produtosEncontrados;
//     } catch (err) {
//         console.error('Erro ao listar produtos:', err.message);
//         throw err;
//     }
// }


// async function editarProduto(id, dadosAtualizados) {
//     try {
//         const conexao = await connection.connect();

//         if (!id) {
//             return { mensagem: "ID do produto não informado!" };
//         }

//         const camposAtualizados = Object.keys(dadosAtualizados);
//         const valoresAtualizados = camposAtualizados.map(campo => dadosAtualizados[campo]);
//         const setClause = camposAtualizados.map(campo => `${campo} = ?`).join(', ');
//         const sql = `UPDATE produtos SET ${setClause} WHERE id = ?`;
//         const [result] = await conexao.execute(sql, [...valoresAtualizados, id]);

//         if (result.affectedRows === 0) {
//             return { mensagem: "Produto não encontrado!" };
//         }

//         return {
//             mensagem: "Produto atualizado com sucesso!",
//             id,
//             dadosAtualizados
//         };
//     } catch (err) {
//         console.error('Erro ao atualizar o produto:', err.message);
//         throw err;
//     }
// }


// async function apagarProduto(id) {
//     try {
//         const conexao = await connection.connect();

//         if (!id) {
//             return { mensagem: "ID do produto não informado!" };
//         }

//         const sql = `DELETE FROM produtos WHERE id = ?`;
//         const [result] = await conexao.execute(sql, [id]);

//         if (result.affectedRows === 0) {
//             return { mensagem: "Produto não encontrado!" };
//         }

//         return {
//             mensagem: "Produto removido com sucesso!",
//             id
//         };
//     } catch (err) {
//         console.error('Erro ao remover o produto:', err.message);
//         throw err;
//     }
// }


// module.exports = {
//     criarProduto,
//     listarProduto,
//     editarProduto,
//     apagarProduto
// }