import { serve } from '@hono/node-server'
import connectDB from './db/index.js';
import {app} from "./app.js"
import dotenv from "dotenv"

dotenv.config({
  path:"./.env"
})

connectDB()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
