import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  fullname: { type: String },
  Type: { type: String },
  Conditions: { type: Boolean },
  fname: { type: String },
  lname: { type: String },
  phone: { type: String },
  jobtitle: { type: String },
  country: { type: String },
  saddress: { type: String },
  city: { type: String },
  state: { type: String },
  pin: { type: String },
  des: { type: String },
  skillcontent: { type: String },
  skills: { type: String },
  edu: { type: String },
  experience: { type: String },
  password: { type: String, required: true, select: false },
  salt: { type: String, select: false },
  sessionToken: { type: String, select: false },
});

 export const UserModel = mongoose.model('User', UserSchema);

// User Actions
 export const getUsers = () => UserModel.find();
 export const getUserByEmail = (email) => UserModel.findOne({ email });
 export const getUserBySessionToken = (sessionToken) => UserModel.findOne({sessionToken: sessionToken });
 export const getUserById = (id) => UserModel.findById(id);
 export const createUser = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteUserById = (id) => UserModel.findOneAndDelete({ _id: id });
 export const updateUserById = (id, values) => UserModel.findByIdAndUpdate(id, values);


