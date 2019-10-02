// Importação do express
const express = require ('express');

// Estância da aplicação
const app = express();

app.post('/users', (req, res) => {
    
    res.json({ id: req.params.id });
});

// Porta em que a aplicação está sendo ouvida
app.listen(3333);