import { Schema, model } from "mongoose";

const SkillSchema = new Schema({
  skill_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Skill = model("Skill", SkillSchema);

export default Skill;
