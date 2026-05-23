import { serve } from '@hono/node-server'
import connectDB from './db/index.js';
import {app} from "./app.js"
import dotenv from "dotenv"

dotenv.config({
  path:"./.env"
})

connectDB()
.then(()=>{
  serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
  
})

})
.catch((err)=>{
  console.error("Failed to connect to database:",err);
  
})
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

