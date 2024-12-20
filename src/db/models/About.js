import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const AboutSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  short_bio: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  social_media: {
    type: String,
  },
});

const About = models?.About || model("About", AboutSchema);

export default About;
