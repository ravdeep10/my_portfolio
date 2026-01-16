import mongoose from "mongoose";
import { env } from "../config/env.js";
import User from "../models/User.model.js";
import { hashPassword } from "../utils/hash.js";

const seedAdmin =async()=>{

    await mongoose.connect(env.MONGO_URI);

    const passwordHash = await hashPassword('admin123');

    await User.deleteMany();
    await User.create({
        name: 'Admin',
        email: 'admin@portfolio.com',
        passwordHash
    });
    console.log('✅ Admin user created');
    process.exit();
}

seedAdmin();