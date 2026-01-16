import mongoose from 'mongoose';
import { env } from '../config/env.js';
import Experience from '../models/Experience.model.js';

const experienceData = [
  {
    company: 'Cognizant',
    role: 'MEAN Stack Developer',
    startDate: new Date('2021-07-01'),
    endDate: new Date('2024-06-01'),
    responsibilities: [
      'Developed enterprise web applications using Angular and Node.js',
      'Integrated REST APIs and managed MongoDB data models',
      'Collaborated with cross-functional teams'
    ],
    achievements: [
      'Delivered procurement modules used across multiple departments',
      'Improved application performance and stability'
    ],
    order: 1
  }
];

const seed = async ()=>{
    await mongoose.connect(env.MONGO_URI);
    await Experience.deleteMany();
    await Experience.insertMany(experienceData);
    console.log('✅ Experience seeded');
    process.exit();
}

seed();
