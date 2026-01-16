import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
} from "../services/project.service.js";

import { getAllExperience } from "../services/experience.service.js";
import { creatMessage } from "../services/contact.service.js";

export const fetchProjects = async (req, res, next) => {
  try {
    const projects = await getAllProjects();
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
};

export const fetchFeaturedProjects = async (req, res, next) => {
  try {
    const projects = await getFeaturedProjects();
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
};

export const fetchProjectBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const project = await getProjectBySlug(slug);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

export const fetchExperience = async (req, res, next) => {
  try {
    const experience = await getAllExperience();

    res.status(200).json({ success: true, data: experience });
  } catch (err) {
    next(err);
  }
};

export const submitContactMessage = async (req,res,next)=>{
    try{
      const {name,email,message} = req.body;

      if(!name, !email, !message){
        return res.status(400).json({
          message:'All fields are required'
        })
      }

      await creatMessage({name,email,message});

      res.status(201).json({
        success: true,
        message: 'Message Recieved'
      })
    }catch(err){
      next(err);
    }
}
