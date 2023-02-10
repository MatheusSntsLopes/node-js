const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Titulo de Teste',
    descripcion: 'Descrição de Teste'
}).then(dados => console.log(dados)).catch(err => console.log(err));

HomeModel.find().then(dados => console.log(dados)).catch(err => console.log(err));

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.enviarPost = (req, res) => {
    res.send(`Aqui esta a rota de post`);
};
