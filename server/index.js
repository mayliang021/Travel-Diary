require('dotenv').config()
const express = require('express');
const cors = require('cors')
const Diary = require('./db')
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors())

app.use(express.static(path.join(__dirname, '../public')));

app.use((req,res,next) => {
  console.log(
    `*=== \x1b[34mNew Request Logged:\x1b[0m Type: \x1b[33m${req.method}\x1b[0m REQUEST, URL: \x1b[33m${req.url}\x1b[0m ===*`
  );
  next();
})

app.post('/diary', async(req, res) => {
  try{
    await Diary.create(req.body)
    res.status(201).send('OK')
  } catch(e) {
    console.log('err in creating data to db', e)
  }

})

app.get('/diary', async(req, res) => {
  try{
    const data = await Diary.find({});
    res.status(200).send(data)
  } catch(e) {
    console.log('err in finding data in db', e)
  }
})

app.delete('/diary/:id', async(req, res) => {
  const {id} = req.params;
  try{
    await Diary.findByIdAndDelete(id);
    res.status(200).send('deleted')
  } catch(e) {
    console.log('err in deleting data in db', e)
  }
})

PORT = process.env.PORT || 3005;

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);