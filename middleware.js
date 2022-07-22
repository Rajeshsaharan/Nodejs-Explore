module.exports = requestFilter = (request, response, next)=>{
    //next will procced next
   if(!request.query.age){
       response.send("get out fucking here")

   }else if(request.query.age < 18){
       response.send("please old more")
   }else{
       next()
   }
}