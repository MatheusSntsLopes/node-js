

exports.paginaInicial = (req, res) => {
    req.session.usuario = {nome: 'Monaco', idade: 25, logado: true};
    req.flash('sucess', 'Bem vindo ao sistema de cadastro de usuário!');
    req.flash('error', 'Você precisa estar logado para acessar esta página!');

    console.log(req.flash('error'), req.flash('sucess'));
    console.log({nome: 'Monaco', idade: 25, logado: true});
    res.render('index');
    return;
};

exports.enviarPost = (req, res) => {
    res.send(req.body);
    return;
};
