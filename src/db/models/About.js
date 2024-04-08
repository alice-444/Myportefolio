import { Schema, model, models } from "mongoose";

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
  phone: {
    type: String,
    required: true,
  },
  short_bio: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    // required: true,
  },
  website: {
    type: String,
  },
  // social_media: {
  //   type: Object,
  // },
});

const About = models.About || model("About", AboutSchema);

export default About;
