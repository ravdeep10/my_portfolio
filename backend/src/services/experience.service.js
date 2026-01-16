import Experience from "../models/Experience.model.js";

export const getAllExperience = async () => {
  return await Experience.find().sort({order:1,startDate: -1})
};

