import Project from '../models/Project.model.js';

export const getAllProjects = async ()=>{
    return await Project.find().sort({createdAt: -1});
}

export const getFeaturedProjects = async ()=>{
    return await Project.find({featured:true}).sort({createdAt: -1});
}

export const getProjectBySlug = async (slug)=>{
    return await Project.findOne({slug})
};