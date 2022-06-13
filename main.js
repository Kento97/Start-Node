import express from "express";

const app = express()
app.get('/user', (req, res) => {
    res.send({
        name: 'a',
        age: 18
    })
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})
app.listen(8080, () => {
    console.log('express server on http://localhost:8080')
})