// Importação do express
const express = require ('express');

// Estância da aplicação
const app = express();

app.get('/', (req, res) => {
    res.json({ massage: "Hello World" });
});

// Porta em que a aplicação está sendo ouvida
app.listen(3333);