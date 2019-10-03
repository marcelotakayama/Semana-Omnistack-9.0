// Importação do express
const express = require ('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@clusterapi-zoq3q.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



// Modelo de requisição que pode ser feita de diversos modelos:
// (req, res): Usado para indicar que o método possui uma requisição e uma resposta

// GET: Serve para poder pegar/Renderizar alguma página
// POST: Serve para enviar os dados da requisição]
// PUT: Serve para editar os dados já existentes
// DELETE: Serve para deletar os dados já existentes

// Comentários sobre a palestra de nodejs:
// Se você printa os bytecodes na hora de executar o arquivo em node, o programa irá 
// Mostrar os bytecodes com mais detalhes

app.use(express.json());
app.use(routes);




// Porta em que a aplicação está sendo ouvida
app.listen(3333);