import mongoose from "mongoose";

interface Iuser {
  _id?: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const useSchema = new mongoose.Schema<Iuser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", useSchema);
export default User;
