import connectDB from "@/db/mongoConnect.js";
import Experience from "@/db/models/Experience.js";

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
 * /api/experience:
 *   post:
 *     summary: Create experience data
 *     description: Create new experience data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Experience'
 *     responses:
 *       '201':
 *         description: Successfully created experience data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 */

async function handlePost(req, res) {
  try {
    const { company_name, position, start_date, end_date, description } =
      req.body;

    const ExpDoc = await Experience.create({
      company_name,
      position,
      start_date,
      end_date,
      description,
    });

    res.status(201).json(ExpDoc);
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Error creating data" });
  }
}

/**
 * @swagger
 * /api/experience:
 *   get:
 *     summary: Get experience data
 *     description: Retrieve experience data from the database
 *     responses:
 *       '200':
 *         description: Successfully retrieved experience data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Experience'
 */

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const exp = await Experience.findById(req.query.id);

      if (!exp) {
        return res.status(404).json({ error: "Data not found" });
      }

      res.json(exp);
    } else {
      const exps = await Experience.find();
      res.json(exps);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}

/**
 * @swagger
 * /api/experience:
 *   put:
 *     summary: Update experience data
 *     description: Update existing experience data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Experience'
 *     responses:
 *       '200':
 *         description: Successfully updated experience data
 */

async function handlePut(req, res) {
  try {
    const { _id, company_name, position, start_date, end_date, description } =
      req.body;

    const existingExp = await Experience.findById(_id);

    if (!existingExp) {
      return res.status(404).json({ error: "Data not found" });
    }
    await Experience.updateOne(
      { _id },
      {
        company_name,
        position,
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
 * /api/experience:
 *   delete:
 *     summary: Delete experience data
 *     description: Delete existing experience data
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: ID of the data to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted experience data
 */

async function handleDelete(req, res) {
  try {
    const dataId = req.query?.id;
    if (dataId) {
      const dataToDelete = await Experience.findById(dataId);

      if (!dataToDelete) {
        return res.status(404).json({ error: "Data not found" });
      }

      await Experience.deleteOne({ _id: dataId });
      res.status(200).json({ message: "Data deleted successfully" });
    } else {
      res.status(400).json({ error: "Missing data ID in the request" });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Error deleting data" });
  }
}
