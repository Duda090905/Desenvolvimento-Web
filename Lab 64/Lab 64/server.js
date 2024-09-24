const path = require('path');
const express = require('express');
const multer = require('multer');
const app = express();

// Configura o armazenamento do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Pasta onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Adiciona timestamp ao nome do arquivo
    }
});

const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upload.html')); // Verifique se está assim
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

// Rota para fazer o upload de arquivos
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'Arquivo enviado com sucesso!', file: req.file });
});

// Rota para tratamento de erros 404
app.use((req, res) => {
    res.status(404).send("404 - Página não encontrada");
});

// Inicia o servidor
app.listen(3000, function() {
    console.log(`Servidor rodando na porta 3000`);
});
