import { HttpError } from "../helpers/index.js";
import Water from "../models/Water.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
  const result = await Water.find();

  res.json(result);
};

// const getById = async (req, res) => {
//     const { id } = req.params;
//     const result = await Water.getMovieById(id);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     res.json(result);
// }

const add = async (req, res) => {
  const result = await Water.create(req.body);

  res.status(201).json(result);
};

// const updateById = async (req, res) => {
//     const { id } = req.params;
//     const result = await Water.updateMovieById(id, req.body);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     res.json(result);
// }

// const deleteById = async (req, res) => {
//     const { id } = req.params;
//     const result = await Water.deleteMovieById(id);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     res.json({
//         message: "Delete success"
//     })
// }

export default {
  getAll: ctrlWrapper(getAll),
  // getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
