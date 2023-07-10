import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req,res) => {
        livros.find()
        .then((livros) => {
            res.status(200).json(livros)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json("Aconteceu um erro ao buscar os livros")
        })
    }
}


export default LivroController;