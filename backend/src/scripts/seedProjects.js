import mongoose from "mongoose";
import { env } from "../config/env.js";
import Project from "../models/Project.model.js";

const projects = [
  {
    title: 'Enterprise Procurement System',
    slug: 'enterprise-procurement-system',
    shortDescription: 'End-to-end procurement workflow platform',
    problem: 'Manual procurement processes caused delays and data inconsistency.',
    solution: 'Built a role-based MERN system with approvals, audit logs, and dashboards.',
    impact: 'Reduced procurement cycle time and improved transparency.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    featured: true
  }
];

const seed = async ()=>{
    await mongoose.connect(env.MONGO_URI);
    await Project.deleteMany();
    await Project.insertMany(projects);
    console.log('✅ Projects seeded');
    process.exit();
}

seed();