const express = require("express")
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'));


app.get("/", (req,res) => {
    res.render("index");
})

app.get("/perguntar", (req,res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta", (req,res) => {
    res.send('Formulario recebido!');
})

app.listen(3000, () =>{
    console.log("API Up!")
})