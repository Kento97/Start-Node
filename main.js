import bodyParser from "body-parser";
import express from "express";
import router from "./router/router.js";

const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(`/api`, router)
app.listen(8080, () => {
    console.log('express server on http://localhost:8080')
})
