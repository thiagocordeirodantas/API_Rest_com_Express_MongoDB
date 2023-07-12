import autores from '../models/Autor.js';

class AutorController  {

    static listarAutores = (req,res) => {
        autores.find()
        .then((autores) => {
            res.status(200).json(autores)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json("Aconteceu um erro ao buscar os autores")
        })
    }

    static listarAutorID =  (req,res) => {
        const id = req.params.id;
        autores.findById(id)
        .then((autores) => {
            res.status(200).send(autores)
        })
        .catch((err) => {
            res.status(400).send({message: `${err} Nao foi possivel buscar por esse ID`})
        })
    }

    static cadastrarAutor = async (req,res) => {
        try {   
            let autor = new autores(req.body);
            await autor.save()
                res.status(201).send(autor.toJSON());
        } catch (err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar autor`})
        }
}
    static atualizarAutor = async (req,res) => {
        try {
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message:"O autor foi atualizado com sucesso"});
        } catch(err) {
            res.status(500).send({message: `${err} nao foi possivel atualizar o autor`})
        }
    }

    static excluirAutor =  (req,res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send({message:` autor Removido com sucesso`})
        })
        .catch((err) => {
            res.status(500).send({message: `${err} Nao foi possivel deletar este autor`})
        })
    }
}

export default AutorController;