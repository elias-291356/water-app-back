import Water from "../models/Water.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Water.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  const total = await Water.countDocuments({ owner });

  res.json({
    result,
    total,
  });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  // const result = await Water.findById(id);
  const result = await Water.findOne({ _id: id, owner });
  if (!result) {
    throw HttpError(404, `Water with id=${id} not found`);
  }

  res.json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Water.create({ ...req.body, owner });

  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  // const result = await Water.findByIdAndUpdate(id, req.body);
  const result = await Water.findOneAndUpdate({ _id: id, owner }, req.body);
  if (!result) {
    throw HttpError(404, `Water with id=${id} not found`);
  }

  res.json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  // const result = await Water.findByIdAndDelete(id);
  const result = await Water.findOneAndDelete({ _id: id, owner });
  if (!result) {
    throw HttpError(404, `Water with id=${id} not found`);
  }

  res.json({
    message: "Delete success",
  });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
