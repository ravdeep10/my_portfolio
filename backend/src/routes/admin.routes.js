import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { createProject, fetchMessages } from "../controllers/admin.controller.js";

const router= Router();

router.post('/projects',requireAuth,createProject);
router.get('/messages', fetchMessages)

export default router;
