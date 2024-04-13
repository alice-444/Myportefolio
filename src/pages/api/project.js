import Project from "@/db/models/Project";
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
    const {
      project_name,
      description,
      start_date,
      end_date,
      project_link,
      role,
      technologies_used,
    } = req.body;

    const ProjectDoc = await Project.create({
        project_name,
        description,
        start_date,
        end_date,
        project_link,
        role,
        technologies_used,
    });

    res.status(201).json(ProjectDoc);
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Error creating data" });
  }
}

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const project = await Project.findById(req.query.id);

      if (!project) {
        return res.status(404).json({ error: "Data not found" });
      }

      res.json(project);
    } else {
      const projects = await Project.find();
      res.json(projects);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}

async function handlePut(req, res) {
  try {
    const { _id, project_name,
        description,
        start_date,
        end_date,
        project_link,
        role,
        technologies_used, } = req.body;

    const existingProject = await Project.findById(_id);

    if (!existingProject) {
      return res.status(404).json({ error: "Data not found" });
    }
    await Skill.updateOne(
      { _id },
      {
        project_name,
        description,
        start_date,
        end_date,
        project_link,
        role,
        technologies_used,
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
      const dataToDelete = await Project.findById(dataId);

      if (!dataToDelete) {
        return res.status(404).json({ error: "Data not found" });
      }

      await Project.deleteOne({ _id: dataId });
      res.status(200).json({ message: "Data deleted successfully" });
    } else {
      res.status(400).json({ error: "Missing data ID in the request" });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Error deleting data" });
  }
}
