## PTI API Rest

### Aluno: Raphael Honorato e Silva

Neste projeto construí uma demonstração de um sistema de cadastro de produtos, de uma loja de peças e acessórios de computador.

Existem rotas adequadas para cada requisição, mais abaixo documentei todas as funcionalidades da API, onde se pode realizar o CRUD completo com dados reais trasidos do banco de dados MySQL.

### Clone o repositório

``` bash
git clone git@github.com:raphahonorato/pti-api-rest.git
cd pti-api-rest
```

### Instale as dependências

``` bash
npm install
```

### Duplique o arquivo `.env.example` e renomeie para `.env`

``` bash
cp .env.example .env
```

### Para iniciar o servidor de desenvolvimento

``` bash
npm run dev
```

### Modelo da tabela de produtos


``` sql
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidadeEstoque INT NOT NULL,
    marca VARCHAR(100) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    garantiaMeses INT NOT NULL
);
```


### Rotas

| Método | Rota | Descrição |
|-------------|-------------|-------------|
|  POST   | /produto       | Cadastrar um novo produto.      |
|  GET  |  /produto?nome={nomeProduto} | Lista o produto com base no seu nome. |
| PUT      | /produto/{ID}      | Atualiza um produto com base no ID.      |
|     DELETE     |    /produto/{ID}    |  Apaga um produto com base no seu ID.  |

## **POST** `/produto`

### **Headers**

- `Content-Type`: `application/json`

### **Body**

```bash
{
            "nome":"Produto exemplo",
            "preco":"100",
            "quantidadeEstoque":"10",
            "marca":"Marca exemplo",
            "modelo":"Modelo de exemplo",
            "garantiaMeses":"12"
}

```

### **Resposta**

**Status Code: 201 OK**

```bash
{
    "mensagem": "Produto criado com sucesso!",
    "novoProduto": {
            "id": 1,
            "nome":"Produto exemplo",
            "preco":"100",
            "quantidadeEstoque":"10",
            "marca":"Marca exemplo",
            "modelo":"Modelo de exemplo",
            "garantiaMeses":"12"
    }
}
```

## **GET** `/produto?nome={nomeProduto}`

### **Headers**

- `Content-Type`: `application/json`

### **Resposta**

**Status Code: 200 OK**

```bash
[
    {
            "id": 1,
            "nome":"Produto exemplo",
            "preco":"100",
            "quantidadeEstoque":"10",
            "marca":"Marca exemplo",
            "modelo":"Modelo de exemplo",
            "garantiaMeses":"12"
    },
    {
            "id": 2,
            "nome":"Produto exemplo",
            "preco":"200",
            "quantidadeEstoque":"20",
            "marca":"Marca exemplo2",
            "modelo":"Modelo de exemplo2",
            "garantiaMeses":"24"
    }
]
```

## **PUT** `/produto/{Id}`

### **Headers**

- `Content-Type`: `application/json`

### **Body**

```bash
{

    "nome":"Produto exemplo",
    "preco":"100",
    "quantidadeEstoque":"10",
    "marca":"Marca exemplo",
    "modelo":"Modelo de exemplo",
    "garantiaMeses":"12"

}

```

### **Resposta**

**Status Code: 200 OK**

```bash
{
    "mensagem": "Produto atualizado com sucesso!",
    "id": 1,
    "dadosAtualizados": {
        "nome":"Produto exemplo",
        "preco":"100",
        "quantidadeEstoque":"10",
        "marca":"Marca exemplo",
        "modelo":"Modelo de exemplo",
        "garantiaMeses":"12"
    }
}

```

## **DELETE** `/produto/{id}`

### **Headers**

- `Content-Type`: `application/json`

**Status Code: 200 OK**

```bash
{
    "mensagem": "Produto removido com sucesso!",
    "id": "1"
}
```
