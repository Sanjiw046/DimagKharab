class ErrorHandler extends Error{
    constructor (statusCode, message='code fatt gaya',errors=[],stack){
        super(message); //create the parent first
        this.statusCode = statusCode;
        this.stack = stack;
        this.errors = errors;
        this.message = message;
        this.success = false;
    }   
}

export default ErrorHandler;