const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true],
    },
    email: {
      type: String,
      required: [true],
      unique: [true],
    },
    password: {
      type: String,
      required: [true],
    },
    token: {
      type: String,
      default: "",
    },
  },
  {
    methods: {
      setPassword: async function (password) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(password, salt);
      },
      comparePassword: async function (password) {
        return await bcrypt.compare(this.password, password);
      },
    },
  },
  { versionKey: false, timestamps: false }
);

const userModel = model("user", userSchema);

module.exports=userModel