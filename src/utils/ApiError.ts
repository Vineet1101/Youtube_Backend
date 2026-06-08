import type { StatusCode } from "hono/utils/http-status";

class ApiError extends Error{

    statusCode:number
    success:boolean
    errors
    constructor(statusCode:number,message="Something went wrong",error=[],stack=""){
        super(message)
        this.statusCode=statusCode
        this.message=message
        this.success=false,
        this.errors=error


        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }


static  badRequest(statusCode:StatusCode,message:string){
    return new ApiError(400,message)
}

static  unauthorized(message='Unauthorized'){
    return new ApiError(401,'Unauthorized')
}


static  notFound(message="Resource not found"){
    return new ApiError(400,message)
}
}
export {ApiError}