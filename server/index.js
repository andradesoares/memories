import express from 'express'
import mongose from 'mongoose'
import cors from cors

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ extended: true}))