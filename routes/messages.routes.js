const expressRouter=require('express').Router()
const {MessageController}=require('../controllers')
class MessagesRoutes{
    router
    constructor(){
        this.router=expressRouter
        this.setupRouters();
    }
    setupRouters(){
        this.router.get('/messages', MessageController.getMessages);
        this.router.post('/message', MessageController.createMessages);
    }
}
module.exports=MessagesRoutes