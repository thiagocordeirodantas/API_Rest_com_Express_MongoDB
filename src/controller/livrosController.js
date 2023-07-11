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

    static listarLivroID = async (req,res) => {
        const id = req.params.id;
        livros.findById(id)
        .then((livros) => {
            res.status(200).send(livros)
        })
        .catch((err) => {
            res.status(400).send({message: `${err} Nao foi possivel buscar por esse ID`})
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
}
    static atualizarLivro = async (req,res) => {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message:"O livro foi atualizado com sucesso"});
        } catch(err) {
            res.status(500).send({message: `${err} nao foi possivel atualizar o livro`})
        }
    }
}


export default LivroController;