const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./user-model');

const app = express();
const PORT = 3000;

mongoose.connect(
    'mongodb+srv://anti_2012:8634weeb@cluster0.7nllt.mongodb.net/?retryWrites=true&w=majority',
  () => { console.log('START "DB"') }
);

app.use(express.json());
app.listen(PORT, () => {
  console.log(`START "SERVER" PORT - ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Main page');
});

app.get('/users', (req, res) => {
  UserModel.find()
    .then((r) => { res.send(r) });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then((r) => res.send(r));
});

app.post('/users', (req, res) => {
  const user = new UserModel(req.body);
  user.save().then((r) => {
    res.send(r);
  })
    .catch((err) => res.status(400).send(err));
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;

  UserModel.updateOne({ _id: id }, user)
    .then((r) => UserModel.findById(id))
    .then((r) => res.send(r))
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;

  UserModel.deleteOne({ _id: id }, user)
    .then((r) => UserModel.findById(id))
    .then((r) => res.send(r));
});


