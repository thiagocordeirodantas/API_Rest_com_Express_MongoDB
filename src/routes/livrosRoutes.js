import express from 'express';
import LivroController from '../controller/livrosController.js';


const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .post("/livros", LivroController.cadastrarLivro)

export default router;  