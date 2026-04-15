import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, 'dist')

/**
 * STATIC FILES
 */
app.use(express.static(distPath))

/**
 * CLEAN URL ROUTING (EXPRESS 4 SAFE)
 */
app.get('*', (req, res) => {
  const url = req.path

  if (url === '/') {
    return res.sendFile(path.join(distPath, 'index.html'))
  }

  res.sendFile(path.join(distPath, url + '.html'))
})

app.listen(PORT, () => {
  console.log(`✅ Running at http://localhost:${PORT}`)
})