const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  posts[id] = { id, ...req.body };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Server up on port 4000.');
});
