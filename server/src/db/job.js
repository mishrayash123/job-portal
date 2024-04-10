import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  jobtitle: { type: Number, required: true },
  location: { type: String, required: true },
  jobtags: { type: String, required: true },
  userid: { type: String, required: true },
  applicationemail: { type: String, required: true },
  salary: { type: String, required: true },
  description: { type: String, required: true }
});

 export const UserModel = mongoose.model('jobs', UserSchema);

// User Actions
 export const getjobs = () => UserModel.find();
 export const getjobsById = (id) => UserModel.findById(id);
 export const getjobsByuserid = (title) => UserModel.findOne({ 'title': title});
 export const createjobs = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deletejobsById = (id) => UserModel.findOneAndDelete({ _id: id });