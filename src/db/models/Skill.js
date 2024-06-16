import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

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

const Skill = models?.Skill || model("Skill", SkillSchema);

export default Skill;
