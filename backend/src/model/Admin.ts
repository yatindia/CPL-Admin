import { Schema, model } from "mongoose";



const AdminSchema = new Schema({
  name: {
    type: String,
    default: 'Admin'
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  login_token: {
    type: String,
    required: false,
  },
});






export const Admin = model("Admin", AdminSchema);

