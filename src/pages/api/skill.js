import Skill from "@/db/models/Skill.js";
import connectDB from "@/db/mongoConnect.js";

export default async function handle(req, res) {
  const { method } = req;

  try {
    await connectDB();

    if (method === "POST") {
      return handlePost(req, res);
    }
    
    if (method === "GET") {
      return handleGet(req, res);
    }

    if (method === "PUT") {
      return handlePut(req, res);
    }

    if (method === "DELETE") {
      return handleDelete(req, res);
    }

    res.status(405).json({ error: `Method ${method} Not Allowed` });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
}

async function handlePost(req, res) {
  try {
    const { skill_name, description } = req.body;

    const SkillDoc = await Skill.create({
      skill_name,
      description,
    });

    res.status(201).json(SkillDoc);
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Error creating data" });
  }
}

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const skill = await Skill.findById(req.query.id);

      if (!skill) {
        return res.status(404).json({ error: "Data not found" });
      }

      res.json(skill);
    } else {
      const skills = await Skill.find();
      res.json(skills);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}

async function handlePut(req, res) {
  try {
    const { _id, skill_name, description } = req.body;

    const existingSkill = await Skill.findById(_id);

    if (!existingSkill) {
      return res.status(404).json({ error: "Data not found" });
    }
    await Skill.updateOne(
      { _id },
      {
        skill_name,
        description,
      }
    );

    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Error updating data" });
  }
}

async function handleDelete(req, res) {
  try {
    const dataId = req.query?.id;
    if (dataId) {
      const dataToDelete = await Skill.findById(dataId);

      if (!dataToDelete) {
        return res.status(404).json({ error: "Data not found" });
      }

      await Skill.deleteOne({ _id: dataId });
      res.status(200).json({ message: "Data deleted successfully" });
    } else {
      res.status(400).json({ error: "Missing data ID in the request" });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Error deleting data" });
  }
}
