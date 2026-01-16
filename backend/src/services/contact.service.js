import ContactMessage from "../models/ContactMessage.model.js";

export const creatMessage = async(payload)=>{
    return await ContactMessage.create(payload);
};

export const getAllMessages = async ()=>{
    return await ContactMessage.find().sort({createdAt: -1});
};
