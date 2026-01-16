import { Router } from "express";
import { fetchProjects,fetchFeaturedProjects, fetchProjectBySlug, submitContactMessage } from "../controllers/public.controller.js";
import { fetchExperience } from "../controllers/public.controller.js";

const router = Router();

router.get('/health',(req,res)=>{
    res.status(200).json({
        status : 'OK',
        uptime : process.uptime(),
        timestamp : new Date().toISOString()
    });
});

router.get('/projects',fetchProjects);
router.get('/projects/featured',fetchFeaturedProjects);
router.get('/projects/:slug', fetchProjectBySlug);
router.get('/experience',fetchExperience);
router.post('/contact', submitContactMessage)


export default router;