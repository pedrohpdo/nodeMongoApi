import 'dotenv/config.js'
import app from './src/app.js'

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`🚀 Http server running at port ${port}`)
})
