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

    static cadastrarLivro = async (req,res) => {
        try {   
            let livro = new livros(req.body);
            await livro.save()
                res.status(201).send(livro.toJSON());
        } catch (err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
        }
}}


export default LivroController;