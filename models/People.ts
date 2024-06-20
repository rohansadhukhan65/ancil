import mongoose from "mongoose";

// Define schema for the document
const PeopleSchema = new mongoose.Schema({
  picture: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postcode: { type: Number, required: true },
});

// Define a model based on the schema

delete mongoose.models['people'];
export const PeopleModel = mongoose.model("people", PeopleSchema);
