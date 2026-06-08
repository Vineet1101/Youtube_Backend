import type { Context, Next } from "hono";

const asyncHandler=(fn:Function)=>async(c:Context,next:Next)=>{
    try {
        await fn(c,next)
    } catch (err:any) {
        c.json({success:false,message:err.message,errors:err.errors},err.code||500)
    }
}


// const async_handler=()=>{}
// const async_handler=(func)=>{async(func)=>{}}



export {asyncHandler}