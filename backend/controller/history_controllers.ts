import { ObjectId } from "mongodb";
import { catchAsync } from "../helpers/middlewares";
import History from "../models/HistoryModels";

export const userHistories = catchAsync(async (req, res, next) => {
  const { userId } = req?.params;
  const query = { _id: new ObjectId(userId) };
  const histories = await History.find(query);
  res.status(200).json(histories);
  next();
});

export const newHistory = catchAsync(async (req, res, next) => {
  const historyObj = req.body;
  const { schedule_id, review_id } = historyObj;
  if (!schedule_id || !review_id) {
    return next(new Error("Invalid history info"));
  }
  const newHistory = await History.create({
    schedule_id,
    review_id,
  });
  res.status(200).json(newHistory);
  next();
});
