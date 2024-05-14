import express from "express";

import moviesController from "../../controllers/waters-controller.js";

import { isEmptyBody } from "../../middlewares/index.js";

import { validateBody } from "../../decorators/index.js";

import {
  movieAddSchema,
  movieUpdateSchema,
} from "../../schemas/water-schemas.js";

const watersRouter = express.Router();

watersRouter.get("/", moviesController.getAll);

// watersRouter.get("/:id", moviesController.getById);

// watersRouter.post("/", isEmptyBody, validateBody(movieAddSchema), moviesController.add);

// watersRouter.put("/:id", isEmptyBody, validateBody(movieUpdateSchema), moviesController.updateById);

// watersRouter.delete("/:id", moviesController.deleteById);

export default watersRouter;
