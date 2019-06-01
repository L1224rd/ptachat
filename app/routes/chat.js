module.exports = (app) => {
  const db = require('../../config/db');

  app.get('/chat', (req, res) => {
    res.render('chat');
  });

  app.get('/msgs', (req, res) => {
    db.ref('/chat').once('value').then((data) => {
      res.send(data.val());
    });
  });

  app.post('/chat', (req, res) => {
    db.ref('/chat').push(req.body);
    res.redirect('/chat');
  });

}