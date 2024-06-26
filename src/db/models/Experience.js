import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const ExperienceSchema = new Schema({
  company_name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
  },
  description: {
    type: String,
  },
});

const Experience = models?.Experience || model("Experience", ExperienceSchema);

export default Experience;
