import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Kết nối CSDL
connectDB()

// Test Route
app.get('/', (req, res) => {
  res.json({ message: 'API Kẹp Tóc Thịnh Phát đang hoạt động!' })
})

// Chạy Server
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`)
})
