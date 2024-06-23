const {messages}=require('../models')
const createMessages=async (req,res)=>{
    const {body}=req
    const message = await messages.create({...body});
    res.json({content:message});
};
const getMessages=async (req,res)=>{
    const messages_All = await messages.findAll();
    res.json({content:messages_All});
};
module.exports={getMessages,createMessages}