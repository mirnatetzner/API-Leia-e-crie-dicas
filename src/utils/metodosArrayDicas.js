import { Diquinha} from "../infra/ArrayDicas.js";

class DicasMetodos {
   
   /**
     * 
     * @param {Object} nova 
     * @returns Object
     */
     static inserirDica(nova) {
        Diquinha.push(nova) // ou Array.Diquinha.push(Diquinha)
        return Diquinha;
    }

    static filtraDica () {
        let min = 0
        let max = Diquinha.length
        let index = Math.random() * ( max - min + 1 );
        index = Math.floor(index);
        return Diquinha[index];
       
    }
}

export default DicasMetodos
