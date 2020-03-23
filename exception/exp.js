class exception{
    returnNoInput(message){
        const errNoInput ={
            error : true,
            message : message
        }
        return new Promise((resolve,reject)=>{
            resolve(errNoInput)
        })
    }
    returnSuccess(message){
        const success ={
            error : false,
            message : message
        }
        return new Promise((resolve,reject)=>{
            resolve(success)
        })
    }
}

module.exports = new exception()