const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
const path = require('path');  // Importa o módulo 'path'
const cors = require('cors');  // Importa o pacote 'cors'
const upload = multer();

const app = express();
const db = new sqlite3.Database('./database.sqlite');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());  // Usa o middleware 'cors'

// Criar a tabela de mensagens se não existir
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, message TEXT, dataAtual TEXT)');
});
// Servir arquivos estáticos
app.use(express.static(path.join(__dirname,)));

// Servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', upload.none(), (req, res) => {
    const { nome, email, message} = req.body;
    

    db.run('INSERT INTO messages (nome, email, message) VALUES (?, ?, ?)', [nome, email, message], function (err) {
        if (err) {         
            return res.status(500).json({ error: err.message });
        }
        res.json({ success: true });
    });
});

// Rota para consultar dados no banco de dados
app.get('/data', (req, res) => {
    db.all('SELECT * FROM messages', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});



app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
