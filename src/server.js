const PORT = process.env.PORT
const app = require('./app')

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})