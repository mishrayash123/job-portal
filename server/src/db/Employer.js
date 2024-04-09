import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  userid: { type: String, required: true },
  profilepic: { type: String },
  companyname: { type: String },
  totalemploye: { type: String },
  fandlname: { type: String },
  description: { type: String },
  phone: { type: String },
  website: { type: String },
  twitter: { type: String },
  fb: { type: String },
  insta: { type: String },
  youtube: { type: String },
  role: { type: String },
  name: { type: String },
});

 export const UserModel = mongoose.model('employer', UserSchema);

// User Actions
 export const getEmployers = () => UserModel.find();
 export const getEmployerByEmail = (email) => UserModel.findOne({ email });
 export const getEmployerById = (id) => UserModel.findById(id);
 export const createEmployer = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteEmployerById = (id) => UserModel.findOneAndDelete({ _id: id });
 export const updateEmployerById = (id, values) => UserModel.findByIdAndUpdate(id, values);
