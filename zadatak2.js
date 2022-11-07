import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app=express()
const port=3000

app.use(bodyParser.json())

var autor = []

app.post("/dodajAutora", (req, res) => {
    var neradi = false
    var varijabla = req.body

    if (!varijabla.naziv || !varijabla.djela || Object.keys(data).length != 2) {
        res.send({ "Error": "Krivi kljucevi" });
        neradi = true;
    }


    varijabla.djela.forEach(y => {
        if (y.length > 20) {
            res.send({ "Error": `Djelo ${y} ima vise od 20 znakova` });
            neradi = true;
        }
    });

    if (!neradi) {
     varijabla={... varijabla, "id":uuidv4(), "datum": new Date()}
    autori.push(varijabla)
    res.send(autor)
    }
});

app.get("/vratiAutore",(req,res)=>{
    let sortitranje = []

    autor.forEach(y=>{
        sortiranje.push({
            "naziv" : y.naziv,
            "djela" : y.djela
        })
    });
    res.send(sortiranje)
})

app.delete("/izbrisiDjeloAutora/:id",(req,res)=>{
    var { id } = req.params
    console.log(id)
    var briseautor = autori.find(autor => autor.id!=id)
    res.send(briseautor)
})

app.listen(port, () => console.log(`Works on port ${port}`));