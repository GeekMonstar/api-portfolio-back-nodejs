import { Model, Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";

type AuthSchemaType = {
  name: string;
  email: string;
  password: string;
};

interface AuthMethodInterface extends Model<AuthSchemaType> {
  authentification: { (email: string, password: string): boolean };
}

const authSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

authSchema.pre("save", async function () {
  const salt = await genSalt(10);
  this.password = await hash(this.password!, salt);
});

authSchema.static(
  "authentification",
  async function (email: string, password: string) {
    const auth = await AuthModel.findOne({ email });
    if (auth) {
      const verif = await compare(password, auth.password!);
      if (verif) {
        return true;
      } else {
        return false;
      }
    }
  }
);

const AuthModel = model<AuthSchemaType, AuthMethodInterface>(
  "auth",
  authSchema
);

export default AuthModel;
