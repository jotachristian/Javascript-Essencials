const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express ();

app.use(cors());
app.use(bodyParser.json());

app.get('/',  (req,res) => {
    response.send("Servidor está rodando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});
