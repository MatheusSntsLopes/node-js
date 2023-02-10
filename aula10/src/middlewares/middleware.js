exports.meuMiddleware = (req,res,next) => {
    console.log('Sou um middleware global');
    next();
};