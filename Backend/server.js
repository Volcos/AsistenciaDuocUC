//LA LINEA DE ABAJO SIRVE PARA CARGAR LOS DATOS DEL ARCHIVO .ENV PARA LLAMARLO DESPUES ES process.env.
require('dotenv').config();

// acá se importan los datos de los modulos y se asignan a una variable
const express = require('express');
const axios = require('axios');

// importamos cors
const cors = require('cors');

//Se instancia express, porque es un framework, axios no se instancia porque es un conjunto de metodos (Estudiar*)
const app = express();

// esto es para que el tontito de cors no salte a lesear
app.use(cors({
    origin: 'http://localhost:8100', // solo se admiten solicitudes que vengan de aquí
    methods: ['GET', 'POST'], // se pueden usar solo estos metodos
    allowedHeaders: ['Content-Type'] // no se 

}));

// Esto es para definir en que puerto se ejecuta el servidor
const PORT = process.env.PORT || 3000;

//Algo de un middleware no cache xd (Estudiar*)
app.use(express.json());

app.post('/send-email', async (req, res) => {

    //Saca los datos importantes para enviaar el correo
    const { to, subject, htmlContent } = req.body;

    try {
        //Aqui usa axios para enviar la solicitud a resend
        const response = await axios.post(
            'https://api.resend.com/emails',
            {
                from: 'Acme <onboarding@resend.dev>',
                to: to,
                subject: subject,
                html: htmlContent
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        //confirmacion
        res.status(200).json({ message: 'Email sent successfullt',data: response.data});
    } catch (error) {
        //mensajes de error
        console.error('Error al enviar email: ', error.response ? error.response.data : error.message,process.env.RESEND_API_KEY)
        res.status(500).json({message: 'Error sending email', error: error.response ? error.response.data : error.message})
    }  
});
// con esto se inicia el servidor y queda esperando por solicitudes
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});