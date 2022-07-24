const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifyToken = (request, response, next)=>{

    const token = request.body.token || request.params.token || request.headers['x-access-token']
    if(!token){
        return response.send('please login user')
    }
    try{ 
        const user = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
        request.user = user
    }catch(error){
        return response.send(error)

    }
    next()

}


module.exports = verifyToken