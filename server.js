const http = require('http')
const port = 3000;

const rotas = {
    '/': 'Curso node',
    '/livros': 'Entrei na pagina de Livros',
    '/autores': 'Exibir autores'
}

const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})


server.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`)
})