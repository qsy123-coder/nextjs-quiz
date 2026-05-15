import { model, models, Schema } from "mongoose";
import User from "./user.model";

interface ITag {
  name: string;
  questions: number;
}

const TagSchema = new Schema<ITag>(
  {
    name: { type: String, unique: true, required: true },
    questions: { type: Number, required: true },
  },
  { timestamps: true },
);

const Tag = models?.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
