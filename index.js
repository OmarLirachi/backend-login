const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

//capturar body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//config CORS
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

//Conexión a BD
const url = `mongodb+srv://roma:roma@cluster0.pv28ecj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.log('Error de conexión: ' + error))


//Importar las rutas
const authRoutes = require('./routes/auth')

//Ruta para middleware
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Funciona Correcto'
    })
})
//Arrancar el servidor
const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
    console.log(`Serividor en Ejecución: ${PORT}`)
})