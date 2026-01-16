import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    shortDescription: {
      type: String,
      required: true
    },

    problem: {
      type: String,
      required: true
    },

    solution: {
      type: String,
      required: true
    },

    impact: {
      type: String,
      required: true
    },

    techStack: {
      type: [String],
      required: true
    },

    githubUrl: {
      type: String
    },

    liveUrl: {
      type: String
    },

    featured: {
      type: Boolean,
      default: false,
      index: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Project', projectSchema);
