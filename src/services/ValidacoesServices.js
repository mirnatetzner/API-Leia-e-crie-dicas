
class ValidacoesService{
    /**
     * 
     * @param {Object} dicas 
     * @returns boolean
     */
    static validaDica(dicas){
        if(typeof(dicas) != Object){
            return "Para valer, sua dica precisa estar no formato JSON"
        }
        return true;
    }
}

export default ValidacoesService