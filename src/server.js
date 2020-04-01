const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://claroapi:claroapi@apiclaro-p31rd.mongodb.net/challenge?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.set('useFindAndModify', false);
app.use(express.json());
app.use(routes);


app.listen(3333);