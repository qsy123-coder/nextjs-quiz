import { model, models, Schema } from "mongoose";
import User from "./user.model";

interface IAccount {
  userId: Schema.Types.ObjectId;
  name: string;
  image?: string;
  password: string;
  provider: string;
  providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>({
  userId: { type: Schema.Types.ObjectId, ref: User, required: true },
  name: { type: String, required: true },
  image: { type: String },
  password: { type: String, required: true },
  provider: { type: String, required: true },
  providerAccountId: { type: String, required: true },
});

const Account = models?.account || model<IAccount>("Account", AccountSchema);

export default Account;
