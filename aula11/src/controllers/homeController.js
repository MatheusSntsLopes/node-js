exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.enviarPost = (req, res) => {
    res.send(`Aqui esta a rota de post`);
};