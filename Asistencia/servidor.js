const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 4000;

// Configuración de middlewares
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ionic' // Cambia por el nombre de tu base de datos
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
    } else {
        console.log('Conexión exitosa a MySQL');
    }
});

// Ruta para guardar un usuario
app.post('/usuarios', (req, res) => {
    const { correo, password} = req.body;

    const query = 'INSERT INTO usuario (correo, password) VALUES (?, ?)';
    db.query(query, [correo, password], (err, result) => {
        if (err) {
            console.error('Error al insertar usuario:', err);
            res.status(500).json({ message: 'Error al guardar usuario' });
        } else {
            res.status(201).json({ message: 'Usuario guardado correctamente', id: result.insertId });
        }
    });
});

app.post('/home', (req, res) => {
    const { correo, password } = req.body;
    // Consulta para verificar las credenciales
    const query = 'SELECT * FROM usuario WHERE correo = ? AND password = ?';
    
    db.query(query, [correo, password], (err, results) => {
        if (err) {
            console.error('Error al verificar usuario:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        } else if (results.length > 0) {
            // Si se encuentra un usuario, devolver los datos (sin contraseña por seguridad)
            const usuario = results[0];
            delete usuario.password;
            res.status(200).json({ message: 'Login exitoso', usuario });
        } else {
            // Si no hay coincidencias, devolver un error de autenticación
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
