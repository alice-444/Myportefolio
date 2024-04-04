import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema({
  skill_name: {
    type: String,
    required: true,
  },
  skill_level: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Skill = models.Skill || model("Skill", SkillSchema);

export default Skill;