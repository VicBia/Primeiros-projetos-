const express = require('express');
const nodemon = require('nodemon')
const app = express();

app.use(express.json());

const ControllersTarefas = require('./controllers/ControllerTarefas');

//Usuarios
app.post('/tarefa/insert', ControllersTarefas.insert);
app.get('/tarefa', ControllersTarefas.get);
app.put('/tarefa/update/:id', ControllersTarefas.update);
app.get('/tarefa/:id', ControllersTarefas.find);
app.delete('/tarefa/:id', ControllersTarefas.delete);


const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log (`API rodando na porta ${PORT}`);
});
