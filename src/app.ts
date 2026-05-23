import {Hono} from "hono"
import { bodyLimit } from "hono/body-limit";
import {cors} from "hono/cors"
import { logger } from "hono/logger";

const app= new Hono()



app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


app.use('*',logger(),bodyLimit({
    maxSize:16*1024,
    onError:(c)=>{
        return c.text('Payload Too Large',413)
    }
}))



export {app}