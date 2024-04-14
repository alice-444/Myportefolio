import About from "@/db/models/About.js";
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

/**
 * @swagger
 * /api/about:
 *   post:
 *     summary: Create a new about data
 *     description: Create a new about data with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               age:
 *                 type: number
 *               location:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               short_bio:
 *                 type: string
 *               website:
 *                 type: string
 *               social_media:
 *                 type: object
 *     responses:
 *       '201':
 *         description: Successfully created about data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/About'
 */

async function handlePost(req, res) {
  try {
    const {
      username,
      age,
      location,
      email,
      phone,
      short_bio,
      profile_picture,
      website,
      social_media,
    } = req.body;

    const AboutDoc = await About.create({
      username,
      age,
      location,
      email,
      phone,
      short_bio,
      website,
      social_media,
    });

    res.status(201).json(AboutDoc);
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Error creating data" });
  }
}

/**
 * @swagger
 * /api/about:
 *   get:
 *     summary: Get all about data
 *     description: Retrieve all about data from the database
 *     responses:
 *       '200':
 *         description: Successfully retrieved about data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/About'
 */

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const about = await About.findById(req.query.id);

      if (!about) {
        return res.status(404).json({ error: "Data not found" });
      }

      res.json(about);
    } else {
      const abouts = await About.find();
      res.json(abouts);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching datas" });
  }
}

/**
 * @swagger
 * /api/about:
 *   put:
 *     summary: Update an existing about data
 *     description: Update an existing about data with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               username:
 *                 type: string
 *               age:
 *                 type: number
 *               location:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               short_bio:
 *                 type: string
 *               website:
 *                 type: string
 *               social_media:
 *                 type: object
 *     responses:
 *       '200':
 *         description: Successfully updated about data
 */

async function handlePut(req, res) {
  try {
    const {
      _id,
      username,
      age,
      location,
      email,
      phone,
      short_bio,
      website,
      social_media,
    } = req.body;

    const existingAbout = await About.findById(_id);

    if (!existingAbout) {
      return res.status(404).json({ error: "Data not found" });
    }
    await About.updateOne(
      { _id },
      {
        username,
        age,
        location,
        email,
        phone,
        short_bio,
        profile_picture,
        website,
        social_media,
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
 * /api/about:
 *   delete:
 *     summary: Delete an about data
 *     description: Delete an about data with the provided ID
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: ID of the about data to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted about data
 *       '404':
 *         description: Data not found
 */

async function handleDelete(req, res) {
  try {
    const dataId = req.query?.id;
    if (dataId) {
      const dataToDelete = await About.findById(dataId);

      if (!dataToDelete) {
        return res.status(404).json({ error: "Data not found" });
      }

      await About.deleteOne({ _id: dataId });
      res.status(200).json({ message: "Data deleted successfully" });
    } else {
      res.status(400).json({ error: "Missing data ID in the request" });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Error deleting data" });
  }
}