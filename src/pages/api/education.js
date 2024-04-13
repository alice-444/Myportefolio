import connectDB from "@/db/mongoConnect.js";
import Education from "@/db/models/Education.js";

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
      formation,
      institution,
      field_of_study,
      degree,
      start_date,
      end_date,
      description,
    } = req.body;

    const EducationDoc = await Education.create({
      formation,
      institution,
      field_of_study,
      degree,
      start_date,
      end_date,
      description,
    });

    res.status(201).json(EducationDoc);
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Error creating data" });
  }
}

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const education = await Education.findById(req.query.id);

      if (!education) {
        return res.status(404).json({ error: "Data not found" });
      }

      res.json(education);
    } else {
      const educations = await Education.find();
      res.json(educations);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching datas" });
  }
}

async function handlePut(req, res) {
  try {
    const {
      _id,
      formation,
      institution,
      field_of_study,
      degree,
      start_date,
      end_date,
      description,
    } = req.body;

    const existingEducation = await Education.findById(_id);

    if (!existingEducation) {
      return res.status(404).json({ error: "Data not found" });
    }
    await Education.updateOne(
      { _id },
      {
        formation,
        institution,
        field_of_study,
        degree,
        start_date,
        end_date,
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
      const dataToDelete = await Education.findById(dataId);

      if (!dataToDelete) {
        return res.status(404).json({ error: "Data not found" });
      }

      await Education.deleteOne({ _id: dataId });
      res.status(200).json({ message: "Data deleted successfully" });
    } else {
      res.status(400).json({ error: "Missing data ID in the request" });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Error deleting data" });
  }
}
