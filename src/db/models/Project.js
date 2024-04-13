import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  project_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // project_picture: {
  //   type: String,
  //   required: true,
  // },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
  },
  project_link: {
    type: String,
  },
  role: {
    type: String,
  },
  technologies_used: {
    type: String,
  },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
