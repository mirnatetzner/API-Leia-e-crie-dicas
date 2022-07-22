import express from "express";
import Dicas from "./src/controllers/dicas.js";


const port = process.env.PORT || 3000 
const app = express()

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.use(express.json())

Dicas.rotas(app)
