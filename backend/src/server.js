// Importação do express
const express = require ('express');

// Estância da aplicação
const app = express();


// Modelo de requisição que pode ser feita de diversos modelos:
// (req, res): Usado para indicar que o método possui uma requisição e uma resposta

// GET: Serve para poder pegar/Renderizar alguma página
// POST: Serve para enviar os dados da requisição]
// PUT: Serve para editar os dados já existentes
// DELETE: Serve para deletar os dados já existentes

app.get('/users', (req, res) => {
    
    res.json({ id: req.params.id });
});

// Porta em que a aplicação está sendo ouvida
app.listen(3333);