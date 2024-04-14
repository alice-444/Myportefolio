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

/**
 * @swagger
 * /api/education:
 *   post:
 *     summary: Create education data
 *     description: Create new education data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Education'
 *     responses:
 *       '201':
 *         description: Successfully created education data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Education'
 */

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

/**
 * @swagger
 * /api/education:
 *   get:
 *     summary: Get education data
 *     description: Retrieve education data from the database
 *     responses:
 *       '200':
 *         description: Successfully retrieved education data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Education'
 */

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

/**
 * @swagger
 * /api/education:
 *   put:
 *     summary: Update education data
 *     description: Update existing education data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Education'
 *     responses:
 *       '200':
 *         description: Successfully updated education data
 */

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

/**
 * @swagger
 * /api/education:
 *   delete:
 *     summary: Delete education data
 *     description: Delete existing education data
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: ID of the data to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted education data
 */

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
