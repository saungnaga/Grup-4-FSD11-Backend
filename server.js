const express=require('express')
const cors=require('cors');

class Server{
    #expressApp;
    #routers;
    constructor(routers=[]){
        this.#expressApp=express()
        this.#routers=routers
        this.#middleware()
        this.#setupRouters()
    }
    #middleware(){
        this.#expressApp.use(cors())
        this.#expressApp.use(express.json())
    }
    #setupRouters(){
        this.#routers.forEach((expressRouter)=>{
            this.#expressApp.use(expressRouter.router)
        })
    }
    start(){
        // const db=new Db()
        this.#expressApp.listen(8080,()=>{
            console.log(`db is connected`)
            console.log(`Listen at port ${8080}`)
        })
    }
}
module.exports=Server;