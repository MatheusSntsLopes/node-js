const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST" />
  Nome: <input type="text" name="nome"> <br>
  Sobrenome: <input type="text" name="sobrenome">
  <button> Enviar</button>
  </form>`);
});

app.get('/teste/:idUsuario?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.nome || req.query.sobrenome);

});


app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi ${req.body.nome}`);

});



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor esta em execução');
})

