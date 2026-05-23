import type { Next } from "hono";

const asyncHandler=(fn:Function)=>async(req:Request,res:Response,next:Next)=>{
    try {
        await fn(req,res,next)
    } catch (err) {
        res.(err.code || 500).json({success:false,message:err.message})
    }
}


// const async_handler=()=>{}
// const async_handler=(func)=>{async(func)=>{}}



export {asyncHandler}