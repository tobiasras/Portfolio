import express from 'express'
import dotenv from 'dotenv'
import * as fs from "fs";
import {allPages} from "./templateEngine.js";


dotenv.config()

const app = express()
app.use(express.static("public"))

const frontpage = fs.readFileSync("./public/pages/frontpage.html").toString()

app.get("/", (req, res) => {
    res.send(frontpage)
})


allPages().forEach(page => {
    app.get("/projects/" + page.title, (req, res) => {
        res.send(page.page)
    })
})


const port = process.env.SERVER_PORT || 8080
app.listen(port, () => {
    console.log(`Running on ${port}`)
})
