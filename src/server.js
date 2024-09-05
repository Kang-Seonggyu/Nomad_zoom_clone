import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

console.log('Hello !');

app.listen(4000);
