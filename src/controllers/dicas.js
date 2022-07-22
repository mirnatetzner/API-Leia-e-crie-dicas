import ConstrutindoDicas from "../models/dicas.js"
import DicasMetodos from "../utils/metodosArrayDicas.js"
import ValidacoesService from "../services/ValidacoesServices.js"

class Dicas {
    static rotas(app){
        app.get("/diquinha",(req,res)=>{
            const resposta = DicasMetodos.filtraDica()
            res.status(200).json(resposta)
        })

        app.post("/diquinha", (req, res) => {
            const dicaIsValid = ValidacoesService.validaDica(req.body)
            if (dicaIsValid) {
                const tip = new ConstrutindoDicas(...Object.values(req.body))
                const response = DicasMetodos.inserirDica(tip)
                res.status(201).json(response)
            } else {
                res.status(400).send("Erro")
            }
        })
    }
}

export default Dicas
