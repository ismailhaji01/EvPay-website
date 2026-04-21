import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, 'dist')

/**
 * Serve static files
 */
app.use(express.static(distPath))

/**
 * SAFE FALLBACK ROUTE (NO path-to-regexp issues)
 */
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
})