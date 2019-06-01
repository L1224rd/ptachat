module.exports = (app) => {
    app.get('/contato', (req, res) => {
        res.render('contato');
    });
}