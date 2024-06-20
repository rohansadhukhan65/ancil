import helpers from "@/helpers/help";
import { PeopleModel } from "@/models/People";
import { MongoConnect } from "@/services/dbConnection";

MongoConnect();

export const POST = async (req: any) => {
  try {
    const { gender, name, location, email, dob, phone, picture } =
      await req.json();

    const savingData = {
      picture: picture.medium,
      name: name.first + " " + name.last,
      gender: gender,
      email: email,
      age: dob.age,
      dob: helpers.extractDateFromTimestamp(dob.date),
      phone: phone,
      street: location.street.name,
      city: location.city,
      state: location.state,
      country: location.country,
      postcode: location.postcode,
    };

    // console.log(savingData);

    const newPeople = new PeopleModel(savingData);
    const people = await newPeople.save();

    return Response.json({ success: true, data: people });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, data: null });
  }
};
