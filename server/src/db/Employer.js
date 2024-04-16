import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  userid: { type: String },
  profilepic: { type: String },
  companyname: { type: String },
  totalemploye: { type: String },
  fullname: { type: String },
  description: { type: String },
  phone: { type: Number },
  website: { type: String },
  twitter: { type: String },
  fb: { type: String },
  insta: { type: String },
  youtube: { type: String },
  role: { type: String },
  createdAt: { type: Date, default: Date.now },
});

 export const UserModel = mongoose.model('employer', UserSchema);

// User Actions
 export const getEmployers = () => UserModel.find();
 export const getEmployerByEmail = (email) => UserModel.findOne({ email });
 export const getEmployerById = (id) => UserModel.findById(id);
 export const createEmployer = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteEmployerById = (id) => UserModel.findOneAndDelete({ _id: id });
 export const updateEmployerById = (id, values) => UserModel.findByIdAndUpdate(id, values);
