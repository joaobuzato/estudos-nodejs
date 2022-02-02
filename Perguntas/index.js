const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")

connection
    .authenticate()
    .then(() => {
        console.log("Conexão do Banco com Sucesso");
    })
    .catch((erro) => {
        console.log(erro);
    })

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/", (req,res) => {
    Pergunta.findAll({ raw: true, order: [
                    ['id', 'desc']
                ] })
        .then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    });
    
});

app.get("/perguntar", (req,res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta", async (req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    await Pergunta.create({
        titulo:titulo,
        descricao:descricao
    }).then(() => {
        res.redirect("/");
    }).catch((erro) => {
        console.log(erro)
    });
});

app.listen(3000, () =>{
    console.log("API Up!")
})