const express = require('express');

const app = express();

app.get('/', (requeste, response) => {
    return response.json ({
        evento: 'Semana Oministack 11',
        aluno: 'Joao Sironi'
    });
});

app.listen(3333);