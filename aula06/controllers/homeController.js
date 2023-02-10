exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST" />
    Nome: <input type="text" name="nome"> <br>
    Sobrenome: <input type="text" name="sobrenome">
    <button> Enviar</button>
    </form>
    `);
};

exports.enviarPost = (req, res) => {
    res.send(`Aqui esta a rota de post`);
};