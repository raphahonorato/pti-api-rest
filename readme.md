## PTI API Rest

Neste projeto construi uma demonstração de um sistema de cadastro de produtos.

Existem rotas adequadas para cada requisição, mais abaixo documentei todas as funcionalidades da API, onde se pode realizar o crud completo com dados em memória, ler, criar, editar e apagar um produto.

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

    "nome": "Nome exemplo",
    "preco": 200

}

```

### **Resposta**

**Status Code: 201 OK**

```bash
{
    "mensagem": "Produto criado com sucesso!",
    "novoProduto": {
        "id": 1,
        "nome": "Nome exemplo",
        "preco": 200
        "criadoEm": "10/11/2024, 11:52:25",
        "atualizadoEm": "10/11/2024, 11:52:25"
    }
}
```

## **GET** `/produto?nome={nomeProduto}`

### **Headers**

- `Content-Type`: `application/json`

### **Resposta**

**Status Code: 200 OK**

```bash
    {
        "id": 1,
        "nome": "Produto 1",
        "preco": 10,
        "criadoEm": "10/11/2024, 11:18:24",
        "atualizadoEm": "10/11/2024, 11:18:24"
    }
```

## **PUT** `/produto/{Id}`

### **Headers**

- `Content-Type`: `application/json`

### **Body**

```bash
{

    "nome": "Nome atualizado",
    "preco": 50

}

```

### **Resposta**

**Status Code: 200 OK**

```bash
{
    "mensagem": "Produto atualizado com sucesso!",
    "produto": {
        "id": 4,
        "nome": "Nome atualizado",
        "preco": 50
        "criadoEm": "10/11/2024, 11:52:25",
        "atualizadoEm": "10/11/2024, 11:52:25"
    }
}

```

## **DELETE** `/produto/{id}`

### **Headers**

- `Content-Type`: `application/json`

**Status Code: 200 OK**

```bash
{
    "message": "Produto removido com sucesso",
    "produto": {
        "id": 1,
        "nome": "Produto exemplo",
        "preco": 10,
        "criadoEm": "10/11/2024, 11:18:24",
        "atualizadoEm": "10/11/2024, 11:18:24"
    }
}
```
