import express from 'express';
import AutorController from '../controller/autoresController.js';


const router = express.Router();

router
    .get("/autores", AutorController.listarAutorID)
    .get("/autores/:id", AutorController.listarAutorID)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)
    
export default router;  