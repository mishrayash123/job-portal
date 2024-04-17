import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  employerid: { type: String, required: true },
  jobid: { type: String, required: true },
  position: { type: String, required: true },
  username: { type: String, required: true },
  cv: { type: String, required: true },
  coverletter: { type: String },
  createdAt: { type: Date, default: Date.now },
});

 export const UserModel = mongoose.model('Appliedjobs', UserSchema);

// User Actions
 export const getAppliedjobs = () => UserModel.find();
 export const getAppliedjobsById = (id) => UserModel.findById(id);
 export const createAppliedjobs = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteAppliedjobsById = (id) => UserModel.findOneAndDelete({ _id: id });