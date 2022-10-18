const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())  // When we want to be able to accept JSON.

app.use(express.json())
app.use(cors())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req, res) => {
    const {item} = req.query
    if (item === undefined) {
        res.status(200).send(inventory)
    } else if (item) {
        res.status(200).send(inventory.filter(invItem => invItem === item.toLowerCase()))
    } else {
        res.status(204).send(inventory)
    }
})

app.listen(5050, () => console.log('Server is listening on port 5050'))

app.get('/api/inventory/:idx', (req, res) => {
    console.log(req.params)
    res.status(200).send(inventory[req.params.idx])
})