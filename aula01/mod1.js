const nome = 'Monaco';
const sobrenome = 'Matheus';

const sayHello = () =>{
    console.log('Hello' + nome + ' ' + sobrenome);
};

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.sayHello = sayHello;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.sayHello = sayHello;
this.teste = 'Esse this se refere ao modulo exports';