const express = require('express')
const port = process.env.PORT || 8888
const axios = require('axios')
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: 'https://murilo9.github.io/desafio-rpc-front',
  optionsSuccessStatus: 200,
  methods: "GET"
}

app.use(cors(corsOptions))

const baseUrl = 'https://epg-api.video.globo.com/programmes/1337?date='

app.get('/', (req, res) => {
  const now = req.query.date
  axios.get(baseUrl + now).then(response => {
    res.status(200).send(response.data)
  })
  .catch(error => {
    res.status(500).send('Internal Server Error')
  })
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}`)
})