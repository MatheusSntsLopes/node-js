exports.meuMiddleware = (req,res,next) => {
    res.locals.VariavelLocal = 'Sou uma variavel local';
    next();
};