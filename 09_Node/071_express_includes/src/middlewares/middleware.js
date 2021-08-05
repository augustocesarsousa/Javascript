module.exports = (req, res, next) => {
    console.log();
    console.log('Test middleware!!!');
    console.log();
    next();
}