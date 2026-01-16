import Project from "../models/Project.model.js";
import { getAllMessages } from "../services/contact.service.js";

export const createProject = async(req,res,next)=>{
    try{
        const project = await Project.create(req.body);
        res.status(201).json({
            success: true,
            message:"Project Created",
            data: project
        })
    }catch(err){
        next(err)
    }
};

export const fetchMessages = async (req,res,next)=>{
    try{
        const messages = await getAllMessages();

        res.status(200).json({
            success: true,
            data: messages 
        })
    }catch(err){
        next(err);
    }
}