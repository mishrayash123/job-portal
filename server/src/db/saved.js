import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  jobid: { type: String, required: true },
  userid: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

 export const UserModel = mongoose.model('savejob', UserSchema);

// User Actions
 export const getsavejob = () => UserModel.find();
 export const getsavejobById = (id) => UserModel.findById(id);
 export const createsavejob = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deletesavejobById = (id) => UserModel.findOneAndDelete({ _id: id });
