import { model, models, Schema } from "mongoose";

interface IModel {
  userId: Schema.Types.ObjectId;
  name: string;
  image?: string;
  password: string;
  provider: string;
  providerModelId: string;
}

const ModelSchema = new Schema<IModel>({});

const Model = models?.Model || model<IModel>("Model", ModelSchema);

export default Model;
