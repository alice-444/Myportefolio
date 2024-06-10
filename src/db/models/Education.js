import { Schema, model } from "mongoose";

const EducationSchema = new Schema({
  formation: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  field_of_study: {
    type: String,
    required: true,
  },
  degree: {
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

const Education = model("Education", EducationSchema);

export default Education;
