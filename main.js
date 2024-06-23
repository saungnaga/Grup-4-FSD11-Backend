const Server = require('./server')
const {MessagesRoutes}=require('./routes');
const messagesRoutes=new MessagesRoutes()
const server = new Server([messagesRoutes]);
server.start();