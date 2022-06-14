import bodyParser from "body-parser";
import express from "express";
import router from "./router/router.js";
import cors from 'cors'
import session from "express-session";
const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(session({
    secret: 'kento',
    resave: false,
    saveUninitialized: true
}))
app.use(`/api`, router)
app.listen(8080, () => {
    console.log('express server on http://localhost:8080')
})
